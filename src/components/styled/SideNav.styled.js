import styled from "styled-components";

export const StyledSideNav = styled.div`
  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56,56,56)"};
  transition: 1s;
  --sidebar-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --sidebar-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --link-background: ${({ theme: { mode } }) =>
    mode === "light" ? "#ebedf0" : "black"};
  --sidebar-accent: "#ebedf0";
  --button-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "black" : "white"};
  --button-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "black"};
  --button-hover-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(100, 100, 100)" : "#ebedf0"};

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 1rem;
  padding: 1rem;
  margin-top: 0.5rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  a {
    all: unset;
    font-size: 1.25rem;
    color: var(--sidebar-text-color);
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
    color: var(--sidebar-text-color);
  }
  h2 {
    color: var(--sidebar-text-color);
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    color: var(--sidebar-text-color);
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
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease, border-color 0.3s ease,
      transform 0.3s ease, box-shadow 0.3s ease;
  }
  .instructions:hover {
    transition: background-color 0.3s ease, border-color 0.3s ease,
      transform 0.3s ease, box-shadow 0.3s ease;
    background-color: rgba(255, 107, 107, 0.8);
  }
`;
