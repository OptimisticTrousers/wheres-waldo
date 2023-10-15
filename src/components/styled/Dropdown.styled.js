import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: absolute;
  left: 0%;
  --black-color: black;
  --blue-color: #00dffc;
  --dull-white-color: #f6f6f6;
  --easing: cubic-bezier(0.6, 0.05, 0.28, 0.91);
  --menu-background: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "#343536"};
  --menu-text: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --sidebar-width: 300px;
  animation: fadeIn ease 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  h2 {
    color: var(--menu-text);
    padding-left: 2rem;
    margin-top: 1rem;
  }
  #btn {
    position: fixed;
    z-index: 5;
    top: 5.1%;
    background-color: inherit;
    border-radius: 10px;
    padding: 0.3rem;
    left: 2%;
    cursor: pointer;
    transition: left 500ms var(--easing);
    & > div {
      width: 35px;
      height: 2px;
      margin-bottom: 8px;
      background-color: var(--blue-color);
      transition: transform 500ms var(--easing), opacity 500ms,
        background-color 250ms;
    }
  }

  .admin-window {
    position: absolute;
    left: -50px;
    z-index: 1;
    top: 100%;
    transform: translateY(-50%);
    color: #fff;
    padding: 12px 30px;
    font-size: 24px;
    cursor: pointer;
    font-family: sans-serif;
    transition: all 350ms var(--easing);
    transform: rotate(90deg);
    background-color: rgba(14, 14, 33, 0.92);
    backdrop-filter: blur(8px);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 2px solid rgba(57, 57, 89, 0.92);
  }

  .admin-window:hover {
    background-color: rgba(
      34,
      34,
      73,
      0.92
    ); /* Significantly darken the background */
    color: #e91e63; /* Change text color to a bright pink */
    transform: rotate(90deg) scale(1.1); /* More scaling along with the rotation */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* Deeper shadow for more depth */
    border-color: rgba(
      97,
      97,
      129,
      0.92
    ); /* Darken the border color more noticeably */
  }

  /* .admin-window.active {
    left: calc(var(--sidebar-width) - 40px);
  } */

  /* .admin-window {
    position: fixed;
    width: 340px;
    left: 0;
    top: 40%;
    display: flex;
    border-radius: 8px 0 0 8px;
    transition: 0.5s;
    overflow: hidden;
    color: white;
    z-index: 1;
    transform: translateX(-296px);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(57, 57, 89, 0.92);
    transform: rotate(90deg);
    justify-content: center;
    align-items: center;
    writing-mode: vertical-lr;
    background-color: rgb(14, 14, 33, 0.92);
  } */

  #btn.active {
    left: 220px;
    top: 0.5%;
    & > div {
      color: black;
    }
    & > #top {
      transform: translateY(10px) rotate(-135deg);
    }
    & > #middle {
      opacity: 0;
      transform: rotate(135deg);
    }
    & > #bottom {
      transform: translateY(-10px) rotate(-45deg);
    }
  }

  #box {
    position: fixed;
    z-index: 4;
    overflow: auto;
    top: 0px;
    left: -300px;
    width: var(--sidebar-width);
    opacity: 0;
    height: 100%;
    background-color: var(--menu-background);
    color: var(--black-color);
    transition: all 350ms var(--easing);
  }

  #box.active {
    left: 0px;
    opacity: 1;
  }

  #items {
    & > .item {
      cursor: pointer;
      font-size: 2em;
      padding: 15px 30px;
      transition: all 250ms;
      &:hover {
        padding: 15px 45px;
        background-color: white;
      }
    }
  }

  #btn,
  #btn * {
    will-change: transform;
  }

  #box {
    will-change: transform, opacity;
  }
  @media (max-width: 750px) {
    #btn {
      top: 7%;
    }
  }
`;
