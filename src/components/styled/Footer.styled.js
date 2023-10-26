import styled from "styled-components";

export const StyledFooter = styled.footer`
  --background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --logo-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "#ebedf0" : "rgb(56, 56, 56)"};
  background-color: var(--background-color);
  padding: 1rem 0rem;
  color: var(--text-color);
  width: 100%;
  transition: 1s;
  margin-top: auto;

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
    color: var(--text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 32px;
    width: 32px;
    text-decoration: none;
  }
  a:hover {
    background-color: var(--logo-background-color);
  }

  @media (max-width: 400px) {
    & > div {
      gap: 0;
    }
    & {
      text-align: center;
    }
  }
`;
