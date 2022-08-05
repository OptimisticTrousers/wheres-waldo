import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useContext, useEffect, useRef, useState } from "react";
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
import { ImageProvider } from "./context/Store";
import { ImageContext } from "./context/Store";
import uniqid from "uniqid";
import { addDoc, arrayUnion } from "firebase/firestore";

import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocFromCache,
  getDoc,
  DocumentSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
import Chance from "chance";

import ReactStopwatch from "react-stopwatch";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const [userInput, setUserInput] = useState("");

  const { images, imageIndex, userWon, timer, timerComponent } =
    useContext(ImageContext);

  const [gameStarted, setGameStarted] = useState(true);

  const formattedTime = useRef(null);

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
    if (formattedTime.current === null) return;

    const [hours, minutes, seconds] = formattedTime.current.textContent.split(":");

    const totalSeconds =
      Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);

    console.log(totalSeconds);

    return totalSeconds;

    //const [hours, minutes, seconds] = timerComponent?.textContent?.split(":")
    //console.log(hours, minutes, seconds)
  }

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  async function formSubmit(event) {
    event.preventDefault();

    const leaderboardRef = doc(db, "leaderboards", images[imageIndex].name);

    await updateDoc(leaderboardRef, {
      leaderboard: arrayUnion({ name: userInput, time: timeToSeconds() }),
    });
    // await updateDoc(doc(db, "leaderboards", images[imageIndex].name), {
    // });
  }

  return (
    <ThemeProvider theme={theme}>
      {userWon && (
        <Modal userWon>
          <div>
            <h2 ref={formattedTime}>You finished in {timerComponent}</h2>
            <p>Enter your name to save your score on the leaderboard!</p>
            <form onSubmit={formSubmit}>
              <label>Username</label>
              <input value={userInput} onChange={handleInputChange} />
              <div className="buttons">
                <button type="button">Cancel</button>
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
        <Outlet />
      </StyledContent>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
