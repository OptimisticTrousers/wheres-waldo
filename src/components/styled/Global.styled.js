import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  html {
    min-height: 100%;
    background: linear-gradient(150deg,#ddd 49.63%,#6e88a1 100%);
  }
  body {
    height: 100%;
  }
`;

export default GlobalStyles;
