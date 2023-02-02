import { defaultTheme } from '../styles/theme/default'

export type ThemeType = typeof defaultTheme

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
