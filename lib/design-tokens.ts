/**
 * Design Tokens for AutoElite Marketplace
 * Central source of truth for design system values
 */

export const colors = {
  // Primary Colors
  primary: {
    red: '#DC2626',
    darkRed: '#991B1B',
  },

  // Neutral Colors
  neutral: {
    black: '#0A0A0A',
    darkGray: '#262626',
    mediumGray: '#737373',
    lightGray: '#E5E5E5',
    white: '#FFFFFF',
    bgLight: '#FAFAFA',
  },

  // Accent Colors
  accent: {
    success: '#16A34A',
    warning: '#EAB308',
    error: '#DC2626',
    info: '#3B82F6',
  },
} as const

export const typography = {
  fontFamily: {
    sans: 'var(--font-inter), system-ui, sans-serif',
    heading: 'var(--font-montserrat), var(--font-inter), sans-serif',
  },

  fontSize: {
    // Headings
    h1Desktop: '48px',
    h1Mobile: '32px',
    h2Desktop: '36px',
    h2Mobile: '28px',
    h3Desktop: '28px',
    h3Mobile: '24px',
    h4Desktop: '24px',
    h4Mobile: '20px',

    // Body
    xlarge: '20px',
    large: '18px',
    regular: '16px',
    small: '14px',
    tiny: '12px',

    // Special
    price: '36px',
    priceCard: '24px',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
} as const

export const spacing = {
  // Base unit: 4px
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',

  // Component-specific
  cardPadding: '24px',
  sectionSpacing: '64px',
  sectionSpacingMobile: '48px',
} as const

export const borderRadius = {
  none: '0px',
  sm: '4px',
  badge: '4px',
  md: '8px',
  button: '8px',
  lg: '12px',
  card: '12px',
  xl: '16px',
  full: '9999px',
} as const

export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  card: '0 2px 8px rgba(0, 0, 0, 0.08)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.12)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
} as const

export const transitions = {
  duration: {
    fast: '150ms',
    standard: '200ms',
    slow: '300ms',
  },

  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  large: '1440px',
  xlarge: '1920px',
} as const

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  toast: 50,
} as const

export const sizes = {
  // Button heights
  button: {
    small: '36px',
    medium: '44px',
    large: '48px',
  },

  // Input heights
  input: {
    small: '36px',
    medium: '44px',
    large: '48px',
  },

  // Icon sizes
  icon: {
    small: '16px',
    medium: '20px',
    large: '24px',
    xlarge: '32px',
  },

  // Container max-width
  container: '1280px',
} as const

// Animation variants for Framer Motion
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
} as const

// Stagger animation settings
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

export const hoverScale = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 },
} as const

export const tapScale = {
  whileTap: { scale: 0.98 },
} as const
