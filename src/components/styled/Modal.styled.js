import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.4);
  text-align: center;
  animation: scale-down 0.1s;

  --modal-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "#fefefe" : "rgb(56, 56, 56)"};
  --modal-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --border-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(211, 211, 211)" : "white"};
  --button-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "#0085fe" : "white"};
  --button-text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --button-hover-background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "#2660a4" : "#ebedf0"};

  button {
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    height: 40px;
    background-color: var(--button-background-color);
    border: none;
    color: var(--button-text-color);
    transition: 0.3s;
  }

  button:hover {
    background-color: var(--button-hover-background-color);
    cursor: pointer;
  }

  h2 {
    font-weight: 900;
    color: var(--modal-text-color);
  }

  @keyframes scale-down {
    0% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  p {
    margin: 0.5rem 0rem;
    color: var(--modal-text-color);
  }

  & > div {
    background-color: var(--modal-background-color);
    margin: 15% auto;
    max-width: 440px;
    padding: 20px;
    border: 1px solid var(--border-color);
    width: ${({ userWon }) => (userWon ? "50%" : "80%")};
    border-radius: 8px;
  }
  & > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  input {
    border: none;
    padding: 1rem;
    outline: 2px solid transparent;
    line-height: inherit;
    color: inherit;
    border-radius: 0.375rem;
    border-width: 1px;
    font-size: 100%;
    width: 100%;
    border: ${({ theme: { mode } }) =>
      mode === "light" ? "1px solid #121212" : "1px solid transparent"};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: start;
  }
  button:nth-child(1) {
    background-color: ${({ userWon }) => userWon && "inherit"};
    color: #0085fe;
    border-radius: 4px;
  }
  & form .buttons > button {
    background-color: ${({ userWon }) => userWon && "inherit"};
    /* color: #9acfff; */
    border-radius: 4px;
    color: ${({ theme: { mode } }) => (mode === "light" ? "black" : "#9acfff")};
  }
  & form label {
    color: var(--modal-text-color);
    align-self: flex-start;
  }
  & form .buttons > button:hover {
    background-color: var(--button-hover-background-color);
    color: var(--button-text-color);
    cursor: pointer;
  }
  label {
    font-weight: 900;
  }
  .buttons {
    display: flex;
    gap: 2rem;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid var(--border-color);
    border-radius: 5%;
  }
  @media (max-width: 500px) {
    & > div {
      width: 98%;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 40px;
      height: 40px;
    }
    button {
      width: 80%;
    }
  }
`;
