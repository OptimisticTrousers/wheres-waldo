import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import { Target } from "./styled/Target.styled";
import { useEffect, useRef, useState, useMemo } from "react";
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
import { StyledControls } from "./styled/Controls.styled";
import { ImageContainer } from "./styled/ImageContainer.styled";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function Game() {
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffset: "50%",
    verticalOffset: "0%",
  }));

    const images = [
    {
      name: "beach",
      image: beach,
    },
    {
      name: "fruitland",
      image: fruitland
    }, 
    {
      name: "hollywood",
      image: hollywood
    }, {
      name: "space",
      image: space
    },
    {
      name: "track",
      image: track
    }, {
      name: "winter",
      image: winter
    }
  ]

  const [imageIndex, setImageIndex] = useState(0);

  const [dbCoordinates, setDbCoordinates] = useState(null);

  const [userWon, setUserWon] = useState(false);

  const [numberOfCharactersFound, setNumberOfCharactersFound] = useState(0);

  const gameContainer = useRef();

  useEffect(() => {
    async function queryCoordinates() {
      const photoRef = doc(db, "photo1", "waldo");

      const photoCollection = collection(db, images[imageIndex].name);

      const querySnapshot = await getDocs(photoCollection);

      querySnapshot.forEach((doc) => {
        console.log(doc.id, ": ", doc.data());
      });
      // photoCollection.then(data => {
      //   console.log("DB DATA: " , data)
      // })
      const photoSnap = await getDoc(photoRef);

      const photoData = photoSnap.data();

      return querySnapshot;
    }
    if (dbCoordinates === null) {
      queryCoordinates().then((databasePhotoData) => {
        console.log(databasePhotoData);
        setDbCoordinates(databasePhotoData.docChanges());
      });
    }
  }, [coordinates]);

  function didUserFindCharacter(
    horizontalCoordinates,
    verticalCoordinates,
    horizontalRange,
    verticalRange
  ) {
    const { horizontalOffset, verticalOffset } = coordinates;

    console.log("Database: ", dbCoordinates);
    console.log("User: ", coordinates);
    console.log("Inner width", window.innerWidth);
    console.log("Inner height", window.innerHeight);

    console.log("TRUE", numberOfCharactersFound);
    if (numberOfCharactersFound === 5) {
      setUserWon(true);
    } else if (
      verticalCoordinates - verticalRange <= verticalOffset &&
      verticalCoordinates >= verticalOffset + 10 &&
      horizontalCoordinates - horizontalRange <= horizontalOffset &&
      horizontalCoordinates >= horizontalOffset + 10
    ) {
      console.log("TRUE");
      setNumberOfCharactersFound((prevCount) => prevCount + 1);
    }
  }

  function handleClick(event) {
    let verticalOffset, horizontalOffset;
    if (event.target.parentNode.parentNode.nodeName !== "MAIN") {
      verticalOffset = event.nativeEvent.offsetX;
      horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
      dbCoordinates.forEach(({ doc }) => {
        const {
          horizontalCoordinates,
          verticalCoordinates,
          horizontalRange,
          verticalRange,
        } = doc.data().coordinates;
        console.log(doc.data().coordinates);
        didUserFindCharacter(
          horizontalCoordinates,
          verticalCoordinates,
          horizontalRange,
          verticalRange
        );
      });
    }
  }

  function toggleFullScreen() {
    const game = gameContainer.current;
    if (!game.fullscreenElement) {
      game.requestFullscreen();
    } else if (game.exitFullscreen) {
      game.exitFullscreen();
    }
  }

  function previousImageClick() {
    if (imageIndex !== 0) {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  }

  function nextImageClick() {
    if (imageIndex !== 5) {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <StyledGame>
      <StyledControls>
        <button onClick={previousImageClick}>Previous Level</button>
        <button onClick={toggleFullScreen}>Fullscreen</button>
        <button onClick={toggleFullScreen}>Levels</button>
        <button onClick={nextImageClick}>Next Level</button>
      </StyledControls>
      <ImageContainer
        ref={gameContainer}
        onClickCapture={handleClick}
        image={images[imageIndex].image}
      >
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
