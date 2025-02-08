import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'yellow-dark': string;
			yellow: string;
			'yellow-light': string;

			'purple-dark': string;
			purple: string;
			'purple-light': string;

			'base-title': string;
			'base-subtitle': string;
			'base-text': string;
			'base-label': string;
			'base-hover': string;
			'base-button': string;
			'base-input': string;
			'base-card': string;
			'base-background': string;
			'base-white': string;
		};
	}
}
