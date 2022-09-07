/* eslint-disable no-restricted-globals */
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledContent } from "./components/styled/Game.styled";
import { Modal } from "./components/styled/Modal.styled";
import { ImageContext } from "./context/Store";
import uniqid from "uniqid";
import { arrayUnion } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import Filter from "bad-words";

function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const [userInput, setUserInput] = useState("");

  const { images, imageIndex, userWon, stoppedTimer, setTimer, setUserWon } =
    useContext(ImageContext);

  const [gameStarted, setGameStarted] = useState(true);

  function changeGameState() {
    setGameStarted((prevValue) => !prevValue);
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

  function timeToSeconds() {
    if (stoppedTimer.current === null) return;

    const [hours, minutes, seconds] =
      stoppedTimer.current.textContent.split(":");

    const totalSeconds =
      Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);

    return totalSeconds;
  }

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  async function formSubmit(event) {
    event.preventDefault();
    const customFilter = new Filter({ placeHolder: "🤪" });
    const leaderboardRef = doc(db, "leaderboards", images[imageIndex].name);

    updateDoc(leaderboardRef, {
      leaderboard: arrayUnion({
        name: customFilter.clean(userInput),
        time: timeToSeconds(),
      }),
    }).then(() => {
      setTimer(0);
      setUserWon((prevValue) => !prevValue);
      setUserInput("");
    });
  }

  function resetGame() {
    setTimer(0);
    setUserWon((prevValue) => !prevValue);
    setUserInput("");
  }

  return (
    <ThemeProvider theme={theme}>
      {userWon && (
        <Modal userWon>
          <div>
            <h2>
              You finished in <span>{stoppedTimer?.current?.textContent}</span>
            </h2>
            <p>Enter your name to save your score on the leaderboard!</p>
            <form onSubmit={formSubmit}>
              <label>Username</label>
              <input value={userInput} onChange={handleInputChange} />
              <div className="buttons">
                <button type="button" onClick={resetGame}>
                  Cancel
                </button>
                <button type="submit">Submit Score</button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {gameStarted === false && (
        <Modal>
          <div>
            <h2>Search for these characters as fast as possible!</h2>
            <p>Click anywhere on the image to select and find the characters</p>
            <div>
              {images[imageIndex].characters.map(({ name, character }) => (
                <div key={uniqid()}>
                  <img src={character} alt={name} />
                  <p>{name}</p>
                </div>
              ))}
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
        <Outlet context={[theme, changeTheme, changeGameState]} />
      </StyledContent>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
