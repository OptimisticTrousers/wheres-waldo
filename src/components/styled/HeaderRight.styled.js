import styled from "styled-components";

export const StyledHeaderRight = styled.div`

  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56,56,56)"};
  transition: 1s;
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

& > div {
  display: flex;
  column-gap: 8px;
  margin: 0 auto;
  padding: 1rem;
}

  a {
    all: unset;
    font-size: 1.25rem;
    color: var(--header-text-color);
  }
  a:hover {
    cursor: pointer;
    color: red;
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

`