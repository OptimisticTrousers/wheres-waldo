import styled from "styled-components";
import PropTypes from "prop-types";

export const ImageContainer = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.75%/2.3275%;
  height: 1280px;
  width: 1920px;

  div {
    position: relative;
    background-image: url(${({ image }) => image});
    background-size: none !important;
    background-repeat: no-repeat;
    border-radius: 1.75%/2.3275%;
  }
`;

ImageContainer.propTypes = {
  image: PropTypes.string,
};
