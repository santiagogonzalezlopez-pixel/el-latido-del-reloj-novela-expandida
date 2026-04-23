export type ThemeMode = 'light' | 'dark';

export type AppTheme = {
  mode: ThemeMode;
  dark: boolean;
  colors: {
    background: string;
    card: string;
    cardMuted: string;
    paper: string;
    paperBorder: string;
    text: string;
    textMuted: string;
    accent: string;
    accentSoft: string;
    accentContrast: string;
    border: string;
    separator: string;
    tabBar: string;
    tabIcon: string;
    success: string;
    shadow: string;
  };
  spacing: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radii: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    pill: number;
  };
  typography: {
    display: {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
      letterSpacing: number;
    };
    title: {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
    };
    subtitle: {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
    };
    body: {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
    };
    bodyStrong: {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
    };
    caption: {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
      letterSpacing: number;
    };
  };
};

const sharedSpacing = {
  xxs: 6,
  xs: 10,
  sm: 14,
  md: 18,
  lg: 26,
  xl: 34,
  xxl: 44,
};

const sharedRadii = {
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
  pill: 999,
};

const sharedTypography = {
  display: {
    fontFamily: 'CormorantGaramond_700Bold',
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.2,
  },
  title: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 28,
    lineHeight: 34,
  },
  subtitle: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 21,
    lineHeight: 27,
  },
  body: {
    fontFamily: 'SourceSerif4_400Regular',
    fontSize: 17,
    lineHeight: 30,
  },
  bodyStrong: {
    fontFamily: 'SourceSerif4_600SemiBold',
    fontSize: 17,
    lineHeight: 29,
  },
  caption: {
    fontFamily: 'SourceSerif4_600SemiBold',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 1.1,
  },
};

export const lightTheme: AppTheme = {
  mode: 'light',
  dark: false,
  colors: {
    background: '#f5efe2',
    card: '#fbf7ee',
    cardMuted: '#eee3cd',
    paper: '#fffaf0',
    paperBorder: '#d8c3a3',
    text: '#1f2d36',
    textMuted: '#53615d',
    accent: '#25465a',
    accentSoft: '#c8d5d3',
    accentContrast: '#f8f1e5',
    border: '#d7c9ae',
    separator: '#e0d2b8',
    tabBar: '#f7f0e4',
    tabIcon: '#60706d',
    success: '#6a7b5a',
    shadow: 'rgba(32, 32, 24, 0.1)',
  },
  spacing: sharedSpacing,
  radii: sharedRadii,
  typography: sharedTypography,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  dark: true,
  colors: {
    background: '#12171c',
    card: '#1a2128',
    cardMuted: '#23303a',
    paper: '#1f262e',
    paperBorder: '#43515c',
    text: '#f4ead8',
    textMuted: '#c1c6bf',
    accent: '#86a7b4',
    accentSoft: '#2f414a',
    accentContrast: '#182129',
    border: '#2f3943',
    separator: '#2a3640',
    tabBar: '#161d23',
    tabIcon: '#8c9ba1',
    success: '#93a77b',
    shadow: 'rgba(0, 0, 0, 0.28)',
  },
  spacing: sharedSpacing,
  radii: sharedRadii,
  typography: sharedTypography,
};
