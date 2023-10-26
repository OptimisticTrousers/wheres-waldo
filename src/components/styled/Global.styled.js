import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    min-height: 100%;
    position: relative;
    --background-color: ${({ theme: { mode } }) =>
      mode === "light" ? "white" : "rgb(56, 56, 56)"};
    background-color: var(--background-color);
  }
  /* Universal Scrollbar Styling based on Theme */
  ::-webkit-scrollbar {
      width: 12px;
  }

  ::-webkit-scrollbar-track {
      background-color: ${({ theme: { mode } }) =>
        mode === "light" ? "#ebedf0" : "rgb(56, 56, 56)"}; 
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme: { mode } }) =>
        mode === "light" ? "rgb(56, 56, 56)" : "white"}; 
      border: 2px solid ${({ theme: { mode } }) =>
        mode === "light" ? "#ebedf0" : "black"}; 
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme: { mode } }) =>
        mode === "light" ? "rgb(100, 100, 100)" : "#ebedf0"}; 
  }
`;

export default GlobalStyles;
