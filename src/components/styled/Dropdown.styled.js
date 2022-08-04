import styled from "styled-components";

// import styled from "styled-components";

// export const StyledDropdown = styled.div`
//   position: absolute;
//   box-sizing: border-box;
//   #btn {
//     position: fixed;
//     z-index: 5;
//     top: 15px;
//     left: 15px;
//     cursor: pointer;
//     transition: left 500ms var(--easing);
//   }
//   #btn > div {
//     width: 35px;
//     height: 2px;
//     margin-bottom: 8px;
//     background-color: var(--blue-color);
//     transition: transform 500ms var(--easing), opacity 500ms, background-color 250ms;
//   }

//   #btn.active {
//     left: 230px;
//   }
//   #btn > div {
//     background-color: var(--black-color);
//   }
//   #btn > #top {
//     transform: translateY(10px) rotate(-135deg);
//   }
//   #btn > #middle {
//     opacity: 0;
//     transform: rotate(135deg);
//   }
//   #btn > #bottom {
//     transform: translateY(-10px) rotate(-45deg);
//   }

//   #box {
//     position: fixed;
//     z-index: 4;
//     overflow: auto;
//     top: 0px;
//     left: -275px;
//     width: 275px;
//     opacity: 0;
//     padding: 20px 0px;
//     height: 100%;
//     background-color: var(--dull-white-color);
//     color: var(--black-color);
//     transition: all 350ms var(--easing);
//   }

//   #box.active {
//     left: 0px;
//     opacity: 1;
//   }

//   #items {
//     position: relative;
//     top: 50%;
//     transform: translateY(-50%);
//   }
//   #items > .item {
//     position: relative;
//     cursor: pointer;
//     font-size: 2em;
//     padding: 15px 30px;
//     transition: all 250ms;
//   }
//     .item:hover {
//       padding: 15px 45px;
//       background-color: var(--black-color);
//       opacity: 0.8;
//     }

//   #btn,
//   #btn * {
//     will-change: transform;
//   }

//   #box {
//     will-change: transform, opacity;
//   }
// `;

export const StyledDropdown = styled.div`
  position: absolute;
  top: 5.1%;
  left: 2%;
  --black-color: black;
  --blue-color: #00dffc;
  --dull-white-color: #f6f6f6;
  --easing: cubic-bezier(0.6, 0.05, 0.28, 0.91);
  --menu-background: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --menu-text: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  h2 {
    color: var(--menu-text);
    padding-left: 2rem;
  }
  #btn {
    position: fixed;
    z-index: 5;
    top: 5.1%;
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

  #btn.active {
    left: 220px;
    top: 2%;
    & > div {
      background-color: var(--menu-text);
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
    left: -275px;
    width: 275px;
    opacity: 0;
    padding: 20px 0px;
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
`;
