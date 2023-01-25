const colors = {
  white: '#fff',
  black: '#000',
} as const;

export const theme = {
  colors,
} as const;

export type Theme = typeof theme;

export const breakpoints = {
  sm: '540px',
  md: '768px',
  lg: '991px',
} as const;

export type BreakPointsType = keyof typeof breakpoints;
