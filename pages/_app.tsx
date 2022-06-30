import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";

// Imports for StyledComponents theme 
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

// Imports for progress bar
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";

const CustomNProgress = NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => CustomNProgress.start());
Router.events.on("routeChangeComplete", () => CustomNProgress.done());
Router.events.on("routeChangeError", () => CustomNProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return <ThemeProvider theme={theme}>
		<Navbar />
		<Component {...pageProps} />
	</ThemeProvider>;
}

export default MyApp;