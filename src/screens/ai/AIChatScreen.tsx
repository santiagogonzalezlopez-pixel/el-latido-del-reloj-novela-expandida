import { Ionicons } from '@expo/vector-icons';
import { useDeferredValue, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { aiSuggestedQuestions } from '../../data';
import { useAppTheme } from '../../theme/ThemeContext';
import { buildBookAssistantReply } from '../../utils/bookAssistant';
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
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'assistant-welcome',
      role: 'assistant',
      text: 'Esta guía reúne respuestas preparadas sobre la familia, las cartas, los lugares y el reloj. Puedes elegir una pregunta sugerida o escribir tu consulta.',
    },
  ]);
  const scrollRef = useRef<ScrollView>(null);
  const messageIdRef = useRef(0);
  const deferredInput = useDeferredValue(input);

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

    const messageId = ++messageIdRef.current;
    const reply = buildBookAssistantReply(question);
    setMessages((current) => [
      ...current,
      { id: `user-${messageId}`, role: 'user', text: question },
      { id: `assistant-${messageId}`, role: 'assistant', text: reply },
    ]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
    >
      <ScrollView
        ref={scrollRef}
        onContentSizeChange={() => {
          if (messages.length > 1) scrollRef.current?.scrollToEnd({ animated: true });
        }}
        contentContainerStyle={{
          gap: theme.spacing.lg,
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.xxl + insets.bottom,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ gap: theme.spacing.sm }}>
          <AppText variant="display">Guía de la obra</AppText>
          <AppText>
            Respuestas preparadas para orientarte por la historia y el archivo familiar.
            La guía tiene un alcance limitado: las preguntas sugeridas son un buen punto de partida.
          </AppText>
        </View>

        <SurfaceCard tone="muted">
          <View style={{ gap: theme.spacing.md }}>
            <SectionHeader
              subtitle="Las respuestas se apoyan en la obra, el archivo familiar y la lectura del árbol genealógico."
              title="Preguntas sugeridas"
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.xs }}>
              {filteredSuggestions.map((question) => (
                <Pressable
                  accessibilityRole="button"
                  key={question}
                  onPress={() => sendQuestion(question)}
                  style={{ maxWidth: '100%' }}
                >
                  <TagPill interactive label={question} />
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
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: theme.colors.tabBar,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          flexDirection: 'row',
          gap: theme.spacing.sm,
          paddingHorizontal: theme.spacing.md,
          paddingTop: theme.spacing.md,
          paddingBottom: Math.max(insets.bottom, theme.spacing.sm),
        }}
      >
        <TextInput
          accessibilityLabel="Consulta a la guía"
          onChangeText={setInput}
          onSubmitEditing={() => sendQuestion(input)}
          returnKeyType="send"
          placeholder="Escribe tu consulta"
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
          accessibilityLabel="Enviar pregunta"
          accessibilityRole="button"
          hitSlop={8}
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
