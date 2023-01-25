import { css } from '@emotion/react';
import { Theme } from '@/styles/variables';

export const styles = {
  container: (theme: Theme) =>
    css({
      color: `${theme.colors.white}`,
    }),
};
