import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  html {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }
  body {
    min-height: 100%;
    position: relative;
    padding-bottom: 40px;
  }
`;

export default GlobalStyles;
