import styled from "styled-components";

export const StyledSelection = styled.div`
  position: absolute;
  top: ${(props) => props.coordinates.horizontalOffSet}px;
  left: ${(props) => props.coordinates.verticalOffSet}px;
  width: 100px;
  height: 100px;
  border: none;
  border: 5px solid red;
  background: none;
`;
