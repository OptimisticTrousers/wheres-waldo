import styled from "styled-components";
import photo from "../../assets/photo1.jpg"
export const StyledGame = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 3rem;
  div {

    position: relative;
    background-image: url(${photo});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 1.75%/2.3275%
  }

  h1 {
    position: absolute;
  }
`;
