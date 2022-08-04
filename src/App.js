import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledContent } from "./components/styled/Game.styled";
import { StyledDropdown } from "./components/styled/Dropdown.styled";
import { Modal } from "./components/styled/Modal.styled";
import odlaw from "./assets/odlaw.jpg";
import waldo from "./assets/waldo.jpg";
import wenda from "./assets/wenda.jpg";
import wizard from "./assets/wizard.jpg";
function App({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);

  const [theme, setTheme] = useState({ mode: "light" });

  const [gameStarted, setGameStarted] = useState(false);

  function changeGameState() {
    setGameStarted((prevValue) => !prevValue);
  }

  function handleClick(event) {
    if (event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true);
    } else {
      setTargetAppearance(false);
    }
  }

  function changeTheme() {
    setTheme((prevTheme) => {
      if (prevTheme.mode === "light") {
        return { mode: "dark" };
      } else if (prevTheme.mode === "dark") {
        return { mode: "light" };
      }
    });
  }


  return (
    <ThemeProvider theme={theme}>
      {gameStarted === false && (
        <Modal>
          <div>
            <p>Search for these characters as fast as possible!</p>
            <p>Click anywhere on the image to select and find the characters</p>
            <div>
              <div>
                <img src={odlaw} />
                <p>Text</p>
              </div>
              <div>
                <img src={waldo} />
                <p>Text</p>
              </div>
              <div>
                <img src={wenda} />
                <p>Text</p>
              </div>
              <div>
                <img src={wizard} />
                <p>Text</p>
              </div>
            </div>
            <button type="button" onClick={changeGameState}>
              Start
            </button>
          </div>
        </Modal>
      )}
      <GlobalStyles />
      <Header changeTheme={changeTheme} theme={theme} changeGameState={changeGameState}/>
      <StyledContent>
        <Outlet targetAppearance={targetAppearance} />
      </StyledContent>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
