import styled from "styled-components";
export const StyledContent = styled.main`
  position: relative;
  height: calc(100vh - (32px + 140px));
  display: grid;
  place-items: center;
  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56,56,56)"};
  transition: 1s;
`;
