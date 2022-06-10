import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp;