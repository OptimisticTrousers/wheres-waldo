import styled from "styled-components";
export const StyledGame = styled.main`
  height: min-content;
  display: flex;
  justify-content: center;

  div {
    padding: 3rem;
    display: flex;
    justify-content: center;
  }
  img {

    width: ${(props) => props.theme.width};
    height: min-content;
    border-radius: 1.75%/2.3275%
  }
`;
