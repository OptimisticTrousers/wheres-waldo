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
    padding-bottom: 40px;
  }
  /* Universal Scrollbar Styling */
::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
}

/* Scrollbar Track */
::-webkit-scrollbar-track {
    background-color: rgba(14, 14, 33, 0.92); /* Same dark background color from your button for consistency */
    border-radius: 10px; /* Rounded corners for a softer appearance */
}

/* Scrollbar Handle */
::-webkit-scrollbar-thumb {
    background-color: rgba(57, 57, 89, 0.92); /* Darkened shade to provide contrast with the track */
    border-radius: 10px; /* Rounded corners to match the track */
    border: 2px solid rgba(14, 14, 33, 0.92); /* An outer border matching the background color for a "grooved" appearance */
}

/* Scrollbar Handle Hover State */
::-webkit-scrollbar-thumb:hover {
    background-color: rgba(97, 97, 129, 0.92); /* Even darker shade for hover feedback */
}


`;

export default GlobalStyles;
