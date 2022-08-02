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

  const [userWins, setUserWins] = useState([false, false, false, false, false, false])

  const [numberOfCharactersFound, setNumberOfCharactersFound] = useState(0);

  const [charactersFound, setCharactersFound] = useState([
    {
      name: "odlaw",
      found: false
    }, 
    {
      name: "waldo",
      found: false
    },
    {
      name: "wilma",
      found: false
    },
    {
      name: "wizard",
      found: false
    },
    {
      name: "woof",
      found: false
    }
  ])

  const gameContainer = useRef();

  useEffect(() => {
    async function queryCoordinates() {
      const photoCollection = collection(db, images[imageIndex].name);

      const querySnapshot = await getDocs(photoCollection);

      return querySnapshot;
    }
    if (dbCoordinates === null) {
      queryCoordinates().then((databasePhotoData) => {
        setDbCoordinates(databasePhotoData.docChanges());
      });
    }
    else {

      dbCoordinates.forEach(({ doc }) => {
        const {
          horizontalCoordinates,
          verticalCoordinates,
          horizontalRange,
          verticalRange,
        } = doc.data().coordinates;
        console.log(doc.id)
        didUserFindCharacter(
          horizontalCoordinates,
          verticalCoordinates,
          horizontalRange,
          verticalRange,
          doc.id
        );
      });
    }

  }, [coordinates]);

  function didUserFindCharacter(
    horizontalCoordinates,
    verticalCoordinates,
    horizontalRange,
    verticalRange,
    name
  ) {
    const { horizontalOffset, verticalOffset } = coordinates;

    console.log("Database Horizontal: ", horizontalCoordinates);
    console.log("Database Vertical: ", verticalCoordinates);
    console.log("User: ", coordinates);
    console.log("Characters Found:", numberOfCharactersFound);
    if (numberOfCharactersFound === 5) {
      setUserWins(prevWins => {
        const newWins = [...prevWins]

        newWins[imageIndex] = true

        return newWins
      });
    } else if (
      verticalCoordinates - verticalRange <= verticalOffset&&
      verticalCoordinates >= verticalOffset&&
      horizontalCoordinates - horizontalRange <= horizontalOffset&&
      horizontalCoordinates >= horizontalOffset
    ) {
      if(charactersFound.find((character) => character.name === name).found === false) {

        setCharactersFound(prevCharactersFound => {
          const characterIndex = prevCharactersFound.findIndex((character) => character.name === name)

          return [...prevCharactersFound.slice(0, characterIndex), {...prevCharactersFound[characterIndex], found: true}, ...prevCharactersFound.slice(characterIndex + 1)]
        })
        setNumberOfCharactersFound((prevCount) => prevCount + 1);
      }
    }
  }

  function handleClick(event) {
    let verticalOffset, horizontalOffset;
    if (event.target.parentNode.parentNode.nodeName !== "MAIN") {
      verticalOffset = event.nativeEvent.offsetX;
      horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
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
        onClick={handleClick}
        image={images[imageIndex].image}
      >
        <Target coordinates={coordinates}>
          <TargetImage />
          <TargetMenu>
            <li>{userWins[imageIndex] && "BOB JONES"}</li>
            <li>The Wizard</li>
            <li>Odlaw</li>
          </TargetMenu>
        </Target>
      </ImageContainer>
    </StyledGame>
  );
}
