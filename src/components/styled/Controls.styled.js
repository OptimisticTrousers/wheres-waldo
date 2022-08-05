import styled from "styled-components";
export const StyledControls = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 70px;
  box-sizing: border-box;
  padding: 14px 20px 15px 20px;
  margin-left: 44px;
  margin-top: 15px;
  border-radius: 30px;
  z-index: 6;
  backdrop-filter: blur(8px);
  justify-content: space-between;
  background-color: black;
  opacity: 0.9;
  margin-bottom: 3rem;

  button {
    background-color: #fff;
    border: 1px transparent;
    border-radius: 18px;
    color: black;
    padding: 10px 28px;
    display: flex;
    gap: 12px;
    font-family: "GT Medium";
    font-size: 16px;
    transition: 0.3s all;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.03);
    background-color: #45c1bc;
  }
`;
