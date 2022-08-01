import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: rgb(56, 56, 56);
  padding: 1rem 0rem;
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  width: 100%;

  div {
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 32px;
    width: 32px;
    text-decoration: none;
  }
  a:hover {
    background-color: #22333b;
  }
`;
