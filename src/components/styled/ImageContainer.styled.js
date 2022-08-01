import styled from "styled-components";
import { Container } from "./Container.styled";
import photo from "../../assets/photo1.jpg";
export const ImageContainer = styled.div`
  position: relative;
  background-image: url(${photo});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1.75%/2.3275%;
  width: 500px;
  height: 500px;

  div {
    position: relative;
    background-image: url(${photo});
    background-size: none !important;
    background-repeat: no-repeat;
    border-radius: 1.75%/2.3275%;
  }
  h1 {
    position: absolute;
  }
`;
