import styled from "styled-components";

const selectionWidth = 100;
const selectionHeight = 200;

export const Target = styled.div`
display: flex;
flex-direction: column;
  top: ${({ coordinates: { horizontalOffSet } }) =>
    horizontalOffSet - selectionHeight / 2}px;
  left: ${({ coordinates: { verticalOffSet } }) =>
    verticalOffSet - selectionWidth / 2}px;
  width: ${selectionWidth}px;
  height: ${selectionHeight}px;
  
  background: none !important;
`;
