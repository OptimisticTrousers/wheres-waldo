import styled from "styled-components";
export const StyledGame = styled.main`
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 3rem;
  background: linear-gradient(150deg,#ddd 49.63%,#6e88a1 100%);

  div {
    display: flex;
    background-color: inherit;
    justify-content:center;
  }
  img {

    position: relative;
    margin-bottom: 3rem;
    width: min-content;
    height: min-content;
    border-radius: 1.75%/2.3275%
  }

  h1 {
    position: absolute;
  }
`;
