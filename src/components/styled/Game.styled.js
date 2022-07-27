import styled from "styled-components";
export const StyledGame = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;

  div {
    padding: 3rem;
    display: flex;
    justify-content: center;
  }
  img {

    width: ${(props) => props.theme.width};
    border-radius: 1.75%/2.3275%
  }
`;
