import type { AppProps } from 'next/app';

import { ThemeProvider, Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { theme } from '@/styles/variables';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
