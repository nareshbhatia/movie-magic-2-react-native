/** @type {import('tailwindcss').Config} */

const nativewind = require('nativewind/tailwind');

const rawColors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '0 0 0',
  white: '255 255 255',
  red: {
    50: '254 242 242',
    100: '254 226 226',
    200: '254 202 202',
    300: '252 165 165',
    400: '248 113 113',
    500: '239 68 68',
    600: '220 38 38',
    700: '185 28 28',
    800: '153 27 27',
    900: '127 29 29',
  },
  zinc: {
    50: '250 250 250',
    100: '244 244 245',
    200: '228 228 231',
    300: '212 212 216',
    400: '161 161 170',
    500: '113 113 122',
    600: '82 82 91',
    700: '63 63 70',
    800: '39 39 42',
    900: '24 24 27',
  },
};

const atomicColors = {
  primary: {
    50: rawColors.red[50],
    100: rawColors.red[100],
    200: rawColors.red[200],
    300: rawColors.red[300],
    400: rawColors.red[400],
    500: rawColors.red[500],
    600: rawColors.red[600],
    700: rawColors.red[700],
    800: rawColors.red[800],
    900: rawColors.red[900],
  },
  neutral: {
    50: rawColors.zinc[50],
    100: rawColors.zinc[100],
    200: rawColors.zinc[200],
    300: rawColors.zinc[300],
    400: rawColors.zinc[400],
    500: rawColors.zinc[500],
    600: rawColors.zinc[600],
    700: rawColors.zinc[700],
    800: rawColors.zinc[800],
    900: rawColors.zinc[900],
  },
};

const semanticColors = {
  bgDefault: `rgba(${rawColors.white})`,
  bgDefaultHover: `rgba(${atomicColors.neutral[900]} / 0.1)`,
  bgBrand: `rgba(${atomicColors.primary[500]})`,
  bgBrandHover: `rgba(${atomicColors.primary[600]})`,
  bgSecondary: `rgba(${rawColors.white})`,
  bgSecondaryHover: `rgba(${atomicColors.primary[50]})`,
  bgSurface: `rgba(${atomicColors.neutral[100]})`,

  borderDefault: `rgba(${atomicColors.neutral[300]})`,
  borderFocus: `rgba(${atomicColors.primary[500]})`,

  strokeDefault: `rgba(${atomicColors.neutral[900]})`,
  strokeBrand: `rgba(${atomicColors.primary[500]})`,

  textDefault: `rgba(${atomicColors.neutral[900]})`,
  textBrand: `rgba(${atomicColors.primary[500]})`,
  textOnBrand: `rgba(${rawColors.white})`,
  textOnSecondary: `rgba(${atomicColors.primary[700]})`,

  successLight: '#4caf50',
  success: '#2e7d32',
  successDark: '#1b5e20',

  infoLight: '#03a9f4',
  info: '#0288d1',
  infoDark: '#01579b',

  warningLight: '#ff9800',
  warning: '#ed6c02',
  warningDark: '#e65100',

  errorLight: '#ef5350',
  error: '#d32f2f',
  errorDark: '#c62828',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    colors: {},
    backgroundColor: {
      transparent: 'transparent',
      default: semanticColors.bgDefault,
      'default-hover': semanticColors.bgDefaultHover,
      brand: semanticColors.bgBrand,
      'brand-hover': semanticColors.bgBrandHover,
      secondary: semanticColors.bgSecondary,
      'secondary-hover': semanticColors.bgSecondaryHover,
      surface: semanticColors.bgSurface,
      // TODO: Remove the following atomic colors
      white: `rgba(${rawColors.white})`,
      black: `rgba(${rawColors.black})`,
      primary: {
        50: `rgba(${atomicColors.primary[50]})`,
        100: `rgba(${atomicColors.primary[100]})`,
        200: `rgba(${atomicColors.primary[200]})`,
        300: `rgba(${atomicColors.primary[300]})`,
        400: `rgba(${atomicColors.primary[400]})`,
        500: `rgba(${atomicColors.primary[500]})`,
        600: `rgba(${atomicColors.primary[600]})`,
        700: `rgba(${atomicColors.primary[700]})`,
        800: `rgba(${atomicColors.primary[800]})`,
        900: `rgba(${atomicColors.primary[900]})`,
      },
      neutral: {
        50: `rgba(${atomicColors.neutral[50]})`,
        100: `rgba(${atomicColors.neutral[100]})`,
        200: `rgba(${atomicColors.neutral[200]})`,
        300: `rgba(${atomicColors.neutral[300]})`,
        400: `rgba(${atomicColors.neutral[400]})`,
        500: `rgba(${atomicColors.neutral[500]})`,
        600: `rgba(${atomicColors.neutral[600]})`,
        700: `rgba(${atomicColors.neutral[700]})`,
        800: `rgba(${atomicColors.neutral[800]})`,
        900: `rgba(${atomicColors.neutral[900]})`,
      },
    },
    borderColor: {
      transparent: 'transparent',
      default: semanticColors.borderDefault,
      focus: semanticColors.borderFocus,
    },
    textColor: {
      default: semanticColors.textDefault,
      brand: semanticColors.textBrand,
      onbrand: semanticColors.textOnBrand,
      onsecondary: semanticColors.textOnSecondary,
      success: semanticColors.success,
      info: semanticColors.info,
      warning: semanticColors.warning,
      error: semanticColors.error,
      // TODO: Remove the following atomic colors
      white: `rgba(${rawColors.white})`,
      black: `rgba(${rawColors.black})`,
      primary: {
        50: `rgba(${atomicColors.primary[50]})`,
        100: `rgba(${atomicColors.primary[100]})`,
        200: `rgba(${atomicColors.primary[200]})`,
        300: `rgba(${atomicColors.primary[300]})`,
        400: `rgba(${atomicColors.primary[400]})`,
        500: `rgba(${atomicColors.primary[500]})`,
        600: `rgba(${atomicColors.primary[600]})`,
        700: `rgba(${atomicColors.primary[700]})`,
        800: `rgba(${atomicColors.primary[800]})`,
        900: `rgba(${atomicColors.primary[900]})`,
      },
      neutral: {
        50: `rgba(${atomicColors.neutral[50]})`,
        100: `rgba(${atomicColors.neutral[100]})`,
        200: `rgba(${atomicColors.neutral[200]})`,
        300: `rgba(${atomicColors.neutral[300]})`,
        400: `rgba(${atomicColors.neutral[400]})`,
        500: `rgba(${atomicColors.neutral[500]})`,
        600: `rgba(${atomicColors.neutral[600]})`,
        700: `rgba(${atomicColors.neutral[700]})`,
        800: `rgba(${atomicColors.neutral[800]})`,
        900: `rgba(${atomicColors.neutral[900]})`,
      },
    },
    stroke: {
      default: semanticColors.strokeDefault,
      brand: semanticColors.strokeBrand,
    },
    extend: {
      // define 'flex-grow-2' for sign-in page
      flexGrow: {
        2: 2,
      },
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  plugins: [],
  presets: [nativewind],
};
