import styled from "styled-components";

const selectionWidth = 100;
const selectionHeight = 100;

export const Target = styled.div`
  position: absolute;
  top: ${({ coordinates: { horizontalOffSet } }) =>
    horizontalOffSet - selectionHeight / 2}px;
  left: ${({ coordinates: { verticalOffSet } }) =>
    verticalOffSet - selectionWidth / 2}px;
  width: ${selectionWidth}px;
  height: ${selectionHeight}px;
  border: none;
  border: 5px solid red;
  background: none;
`;
