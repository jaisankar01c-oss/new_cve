export const theme = {
  colors: {
    primary: '#ea88ae',
    primaryDark: '#d96a94',
    secondary: '#f4a6c1',
    light: '#fff9fc',
    dark: '#1a1a1a',
    white: '#ffffff',
    muted: '#6b7280',
    border: '#f2d4e0',
    shadow: '0 2px 10px rgba(0,0,0,.04)'
  },
  typography: {
    fontFamily: "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px'
    },
    fontWeight: { normal: '400', medium: '500', semibold: '600', bold: '700' },
    lineHeight: { tight: '1.25', normal: '1.5', relaxed: '1.75' }
  },
  spacing: {
    xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px', '2xl': '48px', '3xl': '64px'
  },
  borderRadius: {
    none: '0', sm: '4px', md: '8px', lg: '12px', xl: '16px', full: '50%'
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.1)'
  },
  components: {
    button: { fontSize: '14px', fontWeight: '500', borderRadius: '4px', padding: '12px 16px' },
    input: { fontSize: '14px', borderRadius: '4px', padding: '12px 16px', borderColor: '#dee2e6' },
    card: { borderRadius: '8px', shadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }
  }
};

export const getCSSVariables = () => {
  return `
    :root {
      --color-primary: ${theme.colors.primary};
      --color-primary-dark: ${theme.colors.primaryDark};
      --color-secondary: ${theme.colors.secondary};
      --color-light: ${theme.colors.light};
      --color-dark: ${theme.colors.dark};
      --color-white: ${theme.colors.white};
      --color-muted: ${theme.colors.muted};
      --color-border: ${theme.colors.border};
      --color-shadow: ${theme.colors.shadow};

      --font-family: ${theme.typography.fontFamily};
      --font-size-sm: ${theme.typography.fontSize.sm};
      --font-size-base: ${theme.typography.fontSize.base};
      --font-weight-medium: ${theme.typography.fontWeight.medium};
      --font-weight-semibold: ${theme.typography.fontWeight.semibold};

      --border-radius-sm: ${theme.borderRadius.sm};
      --border-radius-md: ${theme.borderRadius.md};

      --shadow-sm: ${theme.shadows.sm};
      --shadow-md: ${theme.shadows.md};
    }
  `;
};

export default theme;
