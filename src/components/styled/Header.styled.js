import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 10%;
  background-color: #ebfbff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 7.5px rgb(0 0 0 / 10%);
  background-color: #fff;

  nav {
    width: ${(props) => props.theme.width};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
  }

  svg {
    height: 24px;
    width: 24px;
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
