import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0, 0.4);
  text-align: center;
  --border-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56 ,56)" : "white"};
  button {
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    height: 40px;
    background-color: #0085fe;
    border: none;
    color: white;
    transition: 1s;
  }
  button:hover {
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    background-color: #2660a4;
  }
  h2 {
    font-weight: 900;
    color: black;
  }
  p {
    margin: 0.5rem 0rem;
  }
  & > div {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: ${({userWon}) => userWon ? "50%" : "80%"};
    border-radius: 8%;
  }
  & > div > div {
    display: flex;
    justify-content:   center;
    align-items: center;
    gap: 1rem;
  }
  input {
    border: none;
    padding: 1rem;
    outline: 2px solid transparent;
    line-height: inherit;
    color:inherit; 
    border-radius: 0.375rem;
    border-width: 1px;
    font-size: 100%;
    width: 40%;
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
    background-color: ${({userWon}) => userWon && "inherit"};
    color: #0085fe;
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
    object-fit: contain;
    border: 1px solid var(--border-color);
    border-radius: 5%;
  }
  @media(max-width: 500px) {
    & > div{
      width: 98%;
    }
  }
  @media(max-width: 400px) {
    img {
      width: 40px;
      height: 40px;
    }
    button {
      width: 80%;
    }
  }
`;
