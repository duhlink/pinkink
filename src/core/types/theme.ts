export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export const theme: ThemeConfig = {
  colors: {
    primary: '#FF69B4', // Pink color from brand
    secondary: '#000000', // Black for contrast
    accent: '#FFC0CB', // Lighter pink for accents
    background: '#FFFFFF', // White background
    text: '#1A1A1A', // Dark gray for text
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-sans)',
  },
}
