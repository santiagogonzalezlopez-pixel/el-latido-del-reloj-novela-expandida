import { Ionicons } from '@expo/vector-icons';
import { useDeferredValue, useEffect, useRef, useState, startTransition } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';

import { aiSuggestedQuestions } from '../../data';
import { useAppTheme } from '../../theme/ThemeContext';
import { buildMockAssistantReply } from '../../utils/mockAssistant';
import { AppText } from '../../components/AppText';
import { SectionHeader } from '../../components/SectionHeader';
import { SurfaceCard } from '../../components/SurfaceCard';
import { TagPill } from '../../components/TagPill';

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

export function AIChatScreen() {
  const { theme } = useAppTheme();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'assistant-welcome',
      role: 'assistant',
      text: 'Pregunta a la obra. Esta interfaz está preparada para un futuro sistema RAG y, por ahora, responde solo desde el corpus mock cargado.',
    },
  ]);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const deferredInput = useDeferredValue(input);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const filteredSuggestions = aiSuggestedQuestions.filter((question) =>
    deferredInput.trim()
      ? question.toLowerCase().includes(deferredInput.trim().toLowerCase())
      : true,
  );

  const sendQuestion = (rawQuestion: string) => {
    const question = rawQuestion.trim();

    if (!question) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: `user-${Date.now()}`, role: 'user', text: question },
    ]);
    setInput('');
    setIsTyping(true);

    const timer = setTimeout(() => {
      const reply = buildMockAssistantReply(question);

      startTransition(() => {
        setMessages((current) => [
          ...current,
          { id: `assistant-${Date.now()}`, role: 'assistant', text: reply },
        ]);
        setIsTyping(false);
      });
    }, 420);

    timersRef.current.push(timer);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          gap: theme.spacing.lg,
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.xl,
        }}
      >
        <View style={{ gap: theme.spacing.sm }}>
          <AppText variant="display">Pregunta a la obra</AppText>
          <AppText>
            Interfaz de chat preparada para búsqueda semántica futura sobre capítulos, personajes, cartas, cronología y archivo.
          </AppText>
        </View>

        <SurfaceCard tone="muted">
          <View style={{ gap: theme.spacing.md }}>
            <SectionHeader
              subtitle="La futura IA deberá responder solo a partir del corpus de la obra y del material relacionado."
              title="Preguntas sugeridas"
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
              {filteredSuggestions.map((question) => (
                <Pressable key={question} onPress={() => sendQuestion(question)}>
                  <TagPill label={question} />
                </Pressable>
              ))}
            </View>
          </View>
        </SurfaceCard>

        <View style={{ gap: theme.spacing.md }}>
          {messages.map((message) => {
            const isAssistant = message.role === 'assistant';

            return (
              <SurfaceCard
                key={message.id}
                style={{
                  alignSelf: isAssistant ? 'stretch' : 'flex-end',
                  backgroundColor: isAssistant
                    ? theme.colors.card
                    : theme.colors.accent,
                  maxWidth: '92%',
                }}
              >
                <AppText
                  style={{
                    color: isAssistant ? theme.colors.text : theme.colors.accentContrast,
                  }}
                >
                  {message.text}
                </AppText>
              </SurfaceCard>
            );
          })}
          {isTyping ? (
            <AppText tone="secondary">La obra está pensando…</AppText>
          ) : null}
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: theme.colors.tabBar,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          flexDirection: 'row',
          gap: theme.spacing.sm,
          padding: theme.spacing.md,
        }}
      >
        <TextInput
          onChangeText={setInput}
          placeholder="Haz una pregunta sobre personajes, cartas o lugares…"
          placeholderTextColor={theme.colors.textMuted}
          style={{
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
            borderRadius: theme.radii.pill,
            borderWidth: 1,
            color: theme.colors.text,
            flex: 1,
            fontFamily: theme.typography.body.fontFamily,
            fontSize: theme.typography.body.fontSize,
            paddingHorizontal: theme.spacing.md,
            paddingVertical: theme.spacing.sm,
          }}
          value={input}
        />
        <Pressable
          onPress={() => sendQuestion(input)}
          style={({ pressed }) => ({
            alignItems: 'center',
            backgroundColor: theme.colors.accent,
            borderRadius: theme.radii.pill,
            justifyContent: 'center',
            opacity: pressed ? 0.94 : 1,
            paddingHorizontal: theme.spacing.md,
          })}
        >
          <Ionicons color={theme.colors.accentContrast} name="arrow-up" size={18} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
