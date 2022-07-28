import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  html {
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(150deg,#ddd 49.63%,#6e88a1 100%);
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
