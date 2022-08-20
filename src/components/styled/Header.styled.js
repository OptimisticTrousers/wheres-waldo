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
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  img {
    height: 75px;
    width: 75px;
    border-radius: 100px;
    margin: 0 auto;
    object-fit: contain;
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

  @media(max-width: 990px) {
    & > div > div:nth-child(3) {
      display: none;
    }
  }
 
  @media (max-width: 660px) {
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
  }
  @media(max-width: 460px) {
    & > div > div {
      gap: 0;
      margin-left: 1.25rem;
    }
    div:nth-child(2) {
      margin: 0;
    }
    p {
      font-size: 1rem;
    }
  }
  @media(max-width: 355px) {
    img {
      height: 66px;
      width: 66px;
    }
  }
`;
