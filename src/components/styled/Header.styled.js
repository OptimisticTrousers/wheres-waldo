import styled from "styled-components";

export const StyledHeader = styled.header`
  --header-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --header-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --link-background: ${({ theme: { mode } }) =>
    mode === "light" ? "#ebedf0" : "black"};
  --header-accent: "#ebedf0";
  --button-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --button-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --button-hover-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(100, 100, 100)" : "#ebedf0"};
  border-bottom: ${({ theme: { mode } }) =>
    mode === "light" ? "1px solid black" : "1px solid #e0e0e0"};

  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 7.5px rgb(0 0 0 / 10%);
  background-color: var(--header-background-color);
  width: 100%;
  transition: 1s;

  a {
    all: unset;
    font-size: 1.25rem;
    color: var(--header-text-color);
  }
  a:hover {
    cursor: pointer;
    color: red;
  }

  div:nth-child(2) {
    margin: 0 1rem;
  }
  .logo:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
  }

  & > div > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
  }
  .logo {
    border-radius: 50%;
  }
  img {
    height: 75px;
    width: 75px;
    border-radius: 8px;
    object-fit: contain;
    overflow: hidden;
  }
  svg {
    height: 26px;
    width: 26px;
  }

  .theme-button {
    width: 36px;
    height: 36px;
    background-color: white;
    border: none;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  h1 {
    color: var(--header-text-color);
  }
  h2 {
    color: var(--header-text-color);
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    color: var(--header-text-color);
  }
  .theme-button:hover {
    background-color: #ebedf0;
    cursor: pointer;
  }
  .instructions {
    background-color: var(--button-background-color);
    color: var(--button-text-color);
    border: none;
    border-radius: 32px;
    padding: 0.25rem 0.5rem;
  }
  .instructions:hover {
    cursor: pointer;
    background-color: var(--button-hover-background-color);
  }

  & > div > div:last-child {
    gap: 1.5rem; /* Increase the gap between items for better spacing */
    padding-right: 1rem; /* Add some padding to the right for better spacing from the edge */
  }

  .instructions {
    margin-left: 0.5rem; /* Add some margin to the left of the instructions button for spacing */
    padding: 0.25rem 1rem; /* Increase the horizontal padding of the instructions button for better visual */
  }

  /* Adjust the theme button styles for better visuals */
  .theme-button {
    margin-left: 0.5rem; /* Add some margin to the left of the theme button for spacing */
    border: 1px solid var(--header-text-color); /* Add a border to give it some definition */
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
  }

  @media (max-width: 1160px) {
    .container {
      flex-direction: column;
      gap: 0;
      margin-left: 1rem;
    }
  }

  @media (max-width: 1040px) {
    & {
      justify-content: flex-start;
    }
  }

  @media (max-width: 930px) {
    & > div > div:nth-child(3) {
      display: none;
    }
    & > div {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    div:nth-child(2) {
      margin: 0;
    }
    & {
      justify-content: flex-start;
      flex: 1;
    }
    & > div {
      justify-content: space-evenly;
    }
    .container {
      flex-direction: column;
      gap: 0;
      margin-left: 1rem;
    }
    .characters {
      gap: 0.5rem;
    }
    .container {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  /* @media (max-width: 660px) {
    .logo {
      display: none;
    }
    img {
      margin-top: 10px;
    }
    h2 {
      position: absolute;
      top: 0%;
      left: 0%;
    }
  } */
  @media (max-width: 446px) {
    /* & > div > div {
      gap: 0;
      margin-left: 1.25rem;
    }
    div:nth-child(2) {
      margin: 0;
    } */
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 1rem;
    }
    img {
      width: 100%;
    }
    .logo {
      border-radius: 8px;
    }
    & {
      justify-content: stretch;
    }
    .characters {
      padding-right: 1rem;
    }
  }
  /* @media (max-width: 355px) {
    img {
      height: 66px;
      width: 66px;
    }
  } */
`;
