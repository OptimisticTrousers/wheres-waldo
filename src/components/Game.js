import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import { Target } from "./styled/Target.styled";
import { useEffect, useRef, useState } from "react";
import { TargetImage } from "./styled/TargetImage.styled";
import { TargetMenu } from "./styled/TargetMenu.styled";
import { GoLocation } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { firebaseConfig } from "../firebase-config";
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
  addDoc,
  query,
  orderBy,
  limit,
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
import { StyledControls } from "./styled/Controls.styled";
import { ImageContainer } from "./styled/ImageContainer.styled";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function Game() {
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffset: "50%",
    verticalOffset: "0%",
  }));

  const [dbCoordinates, setDbCoordinates] = useState(() => null);

  const [userWon, setUserWon] = useState(() => false);

  const gameContainer = useRef();

  useEffect(() => {
    async function queryCoordinates() {
      const photoRef = doc(db, "photo1", "waldo");
      const photoSnap = await getDoc(photoRef);

      const photoData = photoSnap.data();

      return photoData;
    }
    if (dbCoordinates === null) {
      queryCoordinates().then((databasePhotoData) => {
        setDbCoordinates(databasePhotoData.coordinates);
      });
    } else {
      const { horizontalCoordinates, verticalCoordinates } = dbCoordinates;
      const { horizontalOffset, verticalOffset } = coordinates;

      console.log("Database: ", dbCoordinates);
      console.log("User: ", coordinates);
      console.log("Inner width", window.innerWidth);
      console.log("Inner height", window.innerHeight);
      console.log("Width: ", gameContainer);

      if (
        verticalCoordinates - 20 <= verticalOffset &&
        verticalCoordinates >= verticalOffset &&
        horizontalCoordinates - 45 <= horizontalOffset &&
        horizontalCoordinates >= horizontalOffset
      ) {
        setUserWon((prevValue) => !prevValue);
      }
    }
  }, [coordinates]);

  function handleClick(event) {
    let verticalOffset, horizontalOffset;
    if (event.target.parentNode.parentNode.nodeName !== "MAIN") {
      verticalOffset = event.nativeEvent.offsetX;
      horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
    }
  }

  function toggleFullScreen() {
    console.log(gameContainer.current);
    const game = gameContainer.current;
    if (!game.fullscreenElement) {
      game.requestFullscreen();
    } else if (game.exitFullscreen) {
      game.exitFullscreen();
    }
  }

  return (
    <StyledGame>
      <StyledControls>
        <button onClick={toggleFullScreen}>Fullscreen</button>
      </StyledControls>
      <ImageContainer ref={gameContainer} onClickCapture={handleClick}>
        <Target coordinates={coordinates}>
          <TargetImage />
          <TargetMenu>
            <li>{userWon && "BOB JONES"}</li>
            <li>The Wizard</li>
            <li>Odlaw</li>
          </TargetMenu>
        </Target>
      </ImageContainer>
    </StyledGame>
  );
}
