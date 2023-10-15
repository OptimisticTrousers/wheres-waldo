import styled from "styled-components";

export const TargetMenu = styled.ul`
  color: ${({ theme: { mode } }) => (mode === "light" ? "black" : "white")};
  background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgba(254, 254, 254, 1)" : "rgb(37, 38, 43)"};
  position: absolute;
  top: 55px;
  left: -6px;
  box-sizing: border-box;

  li {
    list-style: none;
    width: 100%;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0rem;
    box-sizing: border-box;
    padding: 1rem;
  }
  li:hover {
    cursor: pointer;
    background-color: ${({ theme: { mode } }) =>
      mode === "light" ? "#e0e0e0" : "rgb(92, 95, 102, 0.35)"};
    color: ${({ theme: { mode } }) => (mode === "light" ? "black" : "white")};
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme: { mode } }) => (mode === "light" ? "black" : "white")};
  }

  img {
    height: 38px;
    border-radius: 4px;
    width: 38px;
    object-fit: contain;
  }
`;
