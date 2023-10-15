import styled from "styled-components";
import PropTypes from "prop-types";

const selectionWidth = 60;
const selectionHeight = 60;

export const Target = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: ${({ coordinates: { horizontalOffset } }) =>
    horizontalOffset - selectionHeight / 2}px;
  left: ${({ coordinates: { verticalOffset } }) =>
    verticalOffset - selectionWidth / 2}px;
  width: ${selectionWidth}px;
  height: ${selectionHeight}px;
  /* border: 5px solid rgb(254, 254, 254); */
  /* border: ${({ theme: { mode } }) =>
    mode === "light" ? "6px solid rgb(254, 254, 254)" : "6px solid #121212"}; */
  border: 6px solid rgb(254, 254, 254);
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgb(51, 51, 51) 0px 0px 5px 2px,
    rgb(51, 51, 51) 0px 0px 5px 1px inset;
  background: none !important;
  transition: 0.1s;
`;

Target.propTypes = {
  coordinates: PropTypes.object,
};
