import styled from "styled-components";
import photo from "../../assets/photo1.jpg"
export const StyledGame = styled.main`
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
  & > div {
    width: 1000px;
    height: 1000px;
  }

  h1 {
    position: absolute;
  }
`;
