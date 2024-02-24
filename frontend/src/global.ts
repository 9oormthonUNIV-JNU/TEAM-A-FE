import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-pretendard: Pretendard;

/* font sizes */
--font-size-xl: 20px;
--font-size-base: 16px;
--font-size-5xl: 24px;
--font-size-21xl: 40px;
--font-size-13xl: 32px;

/* Colors */
--color-dodgerblue: #2e82f2;
--color-black: #000;
--color-gray: #8f8f8f;

/* Gaps */
--gap-101xl: 120px;
--gap-60xl: 79px;
--gap-base: 16px;
--gap-mid: 17px;

/* Paddings */
--padding-xl: 20px;
--padding-8xs: 5px;
--padding-sm: 14px;
--padding-13xl: 32px;
--padding-12xs: 1px;

}
`;
export default GlobalStyle;
