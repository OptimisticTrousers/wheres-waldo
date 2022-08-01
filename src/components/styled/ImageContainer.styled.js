import styled from "styled-components";
import { Container } from "./Container.styled";
import photo from "../../assets/photo1.jpg";
export const ImageContainer = styled(Container)`
  background-image: url(${photo});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1.75%/2.3275%;
  height: 826px;
  width: 1190px;

  div {
    position: relative;
    background-image: url(${photo});
    background-size: none !important;
    background-repeat: no-repeat;
    border-radius: 1.75%/2.3275%;
  }
`;
