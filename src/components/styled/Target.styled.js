import styled from "styled-components";
import PropTypes from 'prop-types'

const selectionWidth = 100;
const selectionHeight = 200;

export const Target = styled.div`
  display: flex;
  flex-direction: column;
  top: ${({ coordinates: { horizontalOffset } }) =>
    horizontalOffset - selectionHeight / 2}px;
  left: ${({ coordinates: { verticalOffset } }) =>
    verticalOffset - selectionWidth / 2}px;
  width: ${selectionWidth}px;
  height: ${selectionHeight}px;
  border: none;
  border: 5px solid red;
  background: none !important;
`;

Target.propTypes = {
  coordinates: PropTypes.object
}
