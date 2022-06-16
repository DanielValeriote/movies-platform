import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string,
		colors: {
			mainWhite: string,
			mainBlack: string,
			mainBlue: string,
			imagePlaceholder: string,
		}
	}
};