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
import beach from "./assets/beach.jpg";
import fruitland from "./assets/fruitland.jpg";
import hollywood from "./assets/hollywood.jpg";
import space from "./assets/space.jpg";
import track from "./assets/track.jpg";
import winter from "./assets/winter.jpg";
function App({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);

  const [theme, setTheme] = useState({ mode: "light" });

  const [gameStarted, setGameStarted] = useState(false);

  const images = [
    {
      name: "beach",
      image: beach,
    },
    {
      name: "fruitland",
      image: fruitland,
    },
    {
      name: "hollywood",
      image: hollywood,
    },
    {
      name: "space",
      image: space,
    },
    {
      name: "track",
      image: track,
    },
    {
      name: "winter",
      image: winter,
    },
  ];

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
            <h2>Search for these characters as fast as possible!</h2>
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
            <p>
              NOTE: If you select a different level while you're in the middle
              of the game, all of your previous progress will be lost!
            </p>
            <button type="button" onClick={changeGameState}>
              Start
            </button>
          </div>
        </Modal>
      )}
      <GlobalStyles />
      <Header
        changeTheme={changeTheme}
        theme={theme}
        changeGameState={changeGameState}
      />
      <StyledContent>
        <Outlet targetAppearance={targetAppearance} images={images}/>
      </StyledContent>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
