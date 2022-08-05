import styled from "styled-components";
import { Container } from "./Container.styled";
import photo from "../../assets/beach.jpg";
import PropTypes from 'prop-types';

export const ImageContainer = styled.div`
  background-image: url(${({image}) => image});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.75%/2.3275%;
  height: 100vh - 100px;
  width: 100vw - 100px;
  overflow:auto;

  div {
    position: relative;
    background-image: url(${({image}) => image});
    background-size: none !important;
    background-repeat: no-repeat;
    border-radius: 1.75%/2.3275%;
  }
`;

ImageContainer.propTypes = {
  image: PropTypes.string
}
