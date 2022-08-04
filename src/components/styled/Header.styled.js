import styled from "styled-components";

export const StyledHeader = styled.header`
  --header-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "black"};
  --header-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "black" : "white"};
    --link-background: ${({theme: {mode}}) => mode === "light" ? "#ebedf0" : "black"}
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

  button:hover {
    background-color: #ebedf0;
    cursor: pointer;
  }

  img {
    height: 75px;
    width: 75px;
    margin-left: 1rem;
    border-radius: 100px;
  }

  img:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
