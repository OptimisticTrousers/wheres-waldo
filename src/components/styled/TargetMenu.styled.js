import styled from "styled-components";

export const TargetMenu = styled.ul`
  color: white;
  background-color: rgb(37, 38, 43);
  position: absolute;
  top: 55px;
  left: 52px;
  li {
    list-style: none;
    width: 100%;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0rem;
    width: fit-content;
  padding: 1rem;
  }
  li:hover {
    background-color: rgb(92, 95, 102, 0.35);
    cursor: pointer;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    height: 38px;
    border-radius: 4px;
    width: 38px;
    object-fit: contain;
  }
`;
