import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainDark: string;
      mainLight: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
