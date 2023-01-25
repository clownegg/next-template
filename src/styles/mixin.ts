import { breakpoints, BreakPointsType } from './variables';
import { css } from '@emotion/react';

export const mq = (type: BreakPointsType = 'md') => {
  const maxWidth = breakpoints[type];

  return css`
    @media screen and (max-width: ${maxWidth}) {
      @content;
    }
  `;
};
