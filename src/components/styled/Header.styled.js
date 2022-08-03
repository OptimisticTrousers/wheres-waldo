import styled from "styled-components";

export const StyledHeader = styled.header`
  height: min-content;
  background-color: #ebfbff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 7.5px rgb(0 0 0 / 10%);
  background-color: #fff;
  width: 100%;

  a {
    all: unset;
  }
  a:hover {
    color: gray;
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

  svg {
    height: 26px;
    width: 26px;
  }

  button {
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

  button:hover {
    background-color: #ebedf0;
    cursor: pointer;
  }

  img {
    height: 75px;
    width: 75px;
    border-radius: 100px;
  }

  img:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
