import { StyledContent } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import { Target } from "./styled/Target.styled";
import { useEffect, useRef, useState, useMemo, useContext } from "react";
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
import { StyledDropdown } from "./styled/Dropdown.styled";
import { StyledDropdownImage } from "./styled/DropdownImage.styled";
import { ImageContext } from "../context/Store";
import uniqid from "uniqid";
import { GameContainer } from "./styled/GameContainer.styled";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function Game() {
  const {
    images,
    imageIndex,
    setImageIndex,
    targetAppearance,
    charactersFound,
    setCharactersFound,
    changeTargetApperance,
    userWon,
    setUserWon,
  } = useContext(ImageContext);
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffset: "50%",
    verticalOffset: "0%",
  }));

  const [dbCoordinates, setDbCoordinates] = useState(null);

  const [isCharacterMenuVisible, setIsCharacterMenuVisible] = useState(false);

  const [gameStarted, setGameStarted] = useState(false);

  function changeGameState() {
    setGameStarted((prevValue) => !prevValue);
  }

  const [numberOfCharactersFound, setNumberOfCharactersFound] = useState(0);

  useEffect(() => {
    async function queryCoordinates() {
      const photoCollection = collection(db, images[imageIndex].name);

      const querySnapshot = await getDocs(photoCollection);

      return querySnapshot;
    }
    queryCoordinates().then((databasePhotoData) => {
      setDbCoordinates(databasePhotoData.docChanges());
    });
  }, [imageIndex]);

  function checkCoordinates() {
    dbCoordinates.forEach(({ doc }) => {
      if (doc.data().coordinates === undefined) return;
      const {
        horizontalCoordinates,
        verticalCoordinates,
        horizontalRange,
        verticalRange,
      } = doc.data().coordinates;
      didUserFindCharacter(
        horizontalCoordinates,
        verticalCoordinates,
        horizontalRange,
        verticalRange,
        doc.id
      );
    });
  }

  function handleTargetClick(name) {
    const character = dbCoordinates.find(({ doc }) => doc.id === name);

    if (character !== undefined) {
      const {
        horizontalCoordinates,
        verticalCoordinates,
        horizontalRange,
        verticalRange,
      } = character.doc.data().coordinates;

      didUserFindCharacter(
        horizontalCoordinates,
        verticalCoordinates,
        horizontalRange,
        verticalRange,
        character.doc.id
      );
    }
  }

  function didUserFindCharacter(
    horizontalCoordinates,
    verticalCoordinates,
    horizontalRange,
    verticalRange,
    name
  ) {
    const { horizontalOffset, verticalOffset } = coordinates;

    console.log(horizontalCoordinates, verticalCoordinates, horizontalRange, verticalRange, name)

    // console.log("Database Horizontal: ", horizontalCoordinates);
    // console.log("Database Vertical: ", verticalCoordinates);
    console.log("User: ", coordinates);
        console.log("bob")
        console.log(charactersFound)
    // console.log("Characters Found:", numberOfCharactersFound);
    if (numberOfCharactersFound === 3) {
      setUserWon(true);
    } if (
      verticalCoordinates - verticalRange <= verticalOffset &&
      verticalCoordinates + verticalRange >= verticalOffset &&
      horizontalCoordinates - horizontalRange <= horizontalOffset &&
      horizontalCoordinates + horizontalRange >= horizontalOffset
    ) {
      if (
        charactersFound.find((character) => character.name === name).found ===
        false
      ) {
        setCharactersFound((prevCharactersFound) => {
          const characterIndex = prevCharactersFound.findIndex(
            (character) => character.name === name
          );

          return [
            ...prevCharactersFound.slice(0, characterIndex),
            { ...prevCharactersFound[characterIndex], found: true },
            ...prevCharactersFound.slice(characterIndex + 1),
          ];
        });
        setNumberOfCharactersFound((prevCount) => prevCount + 1);
      }
    }
  }
  const [isMenuActive, setIsMenuActive] = useState();

  const [showTargetMenu, setShowTargetMenu] = useState(false);

  function changeCoordinates(event) {
    if (event.target.parentNode.nodeName === "SECTION") {
      const verticalOffset = event.nativeEvent.offsetX;
      const horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
    }
  }

  function handleTargetMenu() {
    setShowTargetMenu((prevValue) => !prevValue);
  }

  function handleMenuClick() {
    setIsMenuActive((prevValue) => !prevValue);
  }

  function changeImage(index) {
    setImageIndex(index);
  }

  return (
    <>
      <StyledDropdown>
        <div
          id="btn"
          className={`${isMenuActive && "active"}`}
          onClick={handleMenuClick}
        >
          <div id="top"></div>
          <div id="middle"></div>
          <div id="bottom"></div>
        </div>
        <div id="box" className={`${isMenuActive && "active"}`}>
          <h2>Pick Your Level!</h2>
          <div id="items">
            <div className="item" onClick={() => changeImage(0)}>
              <StyledDropdownImage src={images[0].image} />
            </div>
            <div className="item" onClick={() => changeImage(1)}>
              <StyledDropdownImage src={images[1].image} />
            </div>
            <div className="item" onClick={() => changeImage(2)}>
              <StyledDropdownImage src={images[2].image} />
            </div>
            <div className="item" onClick={() => changeImage(3)}>
              <StyledDropdownImage src={images[3].image} />
            </div>
            <div className="item" onClick={() => changeImage(4)}>
              <StyledDropdownImage src={images[4].image} />
            </div>
            <div className="item" onClick={() => changeImage(5)}>
              <StyledDropdownImage src={images[5].image} />
            </div>
          </div>
        </div>
      </StyledDropdown>
      <GameContainer>
        <ImageContainer
          data-testid="image-level"
          onMouseMove={changeCoordinates}
          image={images[imageIndex].image}
        >
          <Target coordinates={coordinates} onClick={handleTargetMenu}>
            {showTargetMenu && (
              <TargetMenu>
                {images[imageIndex].characters.map(({ character, name }) => {
                  return (
                    <li key={uniqid()} onClickCapture={() => handleTargetClick(name)}>
                      <img src={character} alt={name} />
                      <p>{name}</p>
                    </li>
                  );
                })}
              </TargetMenu>
            )}
          </Target>
        </ImageContainer>
      </GameContainer>
    </>
  );
}
