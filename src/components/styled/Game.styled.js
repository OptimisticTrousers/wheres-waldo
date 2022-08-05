import styled from "styled-components";
export const StyledContent = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 2rem;
  display: grid;
  place-items: center;
  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56,56,56)"};
  transition: 1s;
`;
