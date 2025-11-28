export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans Devanagari"', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '14px' }],
        'sm': ['12px', { lineHeight: '16px' }],
        'base': ['13px', { lineHeight: '18px' }],
        'lg': ['14px', { lineHeight: '20px' }],
        'xl': ['16px', { lineHeight: '22px' }],
        '2xl': ['18px', { lineHeight: '24px' }],
        '3xl': ['20px', { lineHeight: '26px' }],
        '4xl': ['24px', { lineHeight: '30px' }],
      },
      colors: {
        /* map to CSS variables defined in globals.css for runtime theming */
        primary: 'var(--color-primary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          600: 'var(--color-accent-600)',
        },
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        bg: {
          DEFAULT: 'var(--bg-body)',
          surface: 'var(--bg-surface)'
        },
        /* Professional palette */
        'brand-red': '#C41E3A',
        'red-600': '#C41E3A',
        'red-500': '#E53935',
        'red-100': '#FFE5E9',
        'gray-900': '#1A1A1A',
        'gray-800': '#333333',
        'gray-700': '#4B4B4B',
        'gray-500': '#666666',
        'gray-400': '#999999',
        'gray-200': '#E5E5E5',
        'gray-100': '#F5F5F5',
        'border-gray': '#DDDDDD',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 2px 4px rgba(0,0,0,0.08)',
        'lg': '0 4px 8px rgba(0,0,0,0.1)',
      },
      lineHeight: {
        'tight': '1.3',
        'snug': '1.4',
        'normal': '1.5',
        'relaxed': '1.6',
      },
      gap: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      padding: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      margin: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
};
