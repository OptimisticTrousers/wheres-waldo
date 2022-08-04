import styled from "styled-components";

export const StyledHeader = styled.header`
  --header-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --header-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
    --link-background: ${({ theme: { mode } }) =>
      mode === "light" ? "#ebedf0" : "black"}
    --header-accent: "#ebedf0"
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 7.5px rgb(0 0 0 / 10%);
  background-color: var(--header-background-color);
  width: 100%;
  transition: 1s;

  a {
    all: unset;
    color: var(--header-text-color);
  }
  a:hover {
    cursor: pointer;
    color: red;
  }

  div:nth-child(2) {
    margin: 0 1rem;
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

  svg {
    height: 26px;
    width: 26px;
  }

  button {
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
  p {
    text-align: center;
    font-size: 0.5rem;
    color: var(--header-text-color);
  }

  button:hover {
    background-color: #ebedf0;
    cursor: pointer;
  }

  img {
    height: 75px;
    width: 75px;
    margin-left: 1rem;
    border-radius: 100px;
    margin: 0 auto;
  }

  img:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media(max-width: 910px) {
    .logo {
      display: none;
    }
    h1 {
      display: none;
    }
  }
  @media(max-width: 620px) { 
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media(max-width: 511px) { 
    & {
      gap: 0;
    }
    div:nth-child(2) {
      margin: 4px 8px;
    }
    a {
      margin-left: 4px;
    }
    img {
      width: 25px;
      height: 25px;
    }
    svg {
      width: 50%;
      height: 50%;
    }
  }
`;
