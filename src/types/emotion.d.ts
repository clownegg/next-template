import '@emotion/react';
import { Theme as OriginalTheme } from '@/styles/variables';

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends OriginalTheme {}
}
