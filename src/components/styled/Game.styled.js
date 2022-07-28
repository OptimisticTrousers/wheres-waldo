import styled from "styled-components";
import photo from "../../assets/photo1.jpg"
export const StyledGame = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 3rem;
  //background: linear-gradient(150deg,#ddd 49.63%,#6e88a1 100%);

  /* div {
    display: flex;
    background-color: inherit;
    justify-content:center;
  } */
  div {

    position: relative;
    background-image: url(${photo});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 1.75%/2.3275%
  }
  /* img {

    margin-bottom: 3rem;
    width: min-content;
    height: min-content;
  } */

  h1 {
    position: absolute;
  }
`;
