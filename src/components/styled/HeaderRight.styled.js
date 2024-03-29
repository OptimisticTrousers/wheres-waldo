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
    mode === "light" ? "black" : "white"};
  --button-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "black"};
  --button-hover-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(100, 100, 100)" : "#ebedf0"};

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    padding-top: 1rem;
    padding: 0.25rem;
    margin-top: 0.5rem;
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
    color: var(--button-background-color);
  }

  .theme-button {
    width: 36px;
    height: 36px;
    background-color: inherit;
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
    background-color: var(--button-text-color);
    cursor: pointer;
  }
  .instructions {
    background-color: var(--button-background-color);
    background-color: #ff6b6b;
    border: none;
    color: white;
    border-radius: 8px;
    padding: 0.5rem 1.25rem;
    transition: background-color 0.3s ease, border-color 0.3s ease,
      transform 0.3s ease, box-shadow 0.3s ease;
  }
  .instructions:hover {
    transition: all 0.3s ease;
    background-color: #ff3d3d; /* a slightly darker shade of the original color */
    border-color: #ff3d3d;
    transform: scale(1.05); /* slightly enlarging the button for emphasis */
    cursor: pointer; /* to indicate it's clickable */
  }
`;
