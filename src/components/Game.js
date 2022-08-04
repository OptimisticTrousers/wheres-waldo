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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function Game() {

  const {images, imageIndex, setImageIndex, targetAppearance, charactersFound, setCharactersFound} = useContext(ImageContext);
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffset: "50%",
    verticalOffset: "0%",
  }));


  const [dbCoordinates, setDbCoordinates] = useState(null);

  const [userWins, setUserWins] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [numberOfCharactersFound, setNumberOfCharactersFound] = useState(0);


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
    } else {
      dbCoordinates.forEach(({ doc }) => {
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
  }, [coordinates, didUserFindCharacter, dbCoordinates, images]);

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
      setUserWins((prevWins) => {
        const newWins = [...prevWins];

        newWins[imageIndex] = true;

        return newWins;
      });
    } else if (
      verticalCoordinates - verticalRange <= verticalOffset &&
      verticalCoordinates >= verticalOffset &&
      horizontalCoordinates - horizontalRange <= horizontalOffset &&
      horizontalCoordinates >= horizontalOffset
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

  function handleClick(event) {
    if (event.target.parentNode.nodeName === "MAIN") {
      const verticalOffset = event.nativeEvent.offsetX;
      const horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
    }
  }

  const [isMenuActive, setIsMenuActive] = useState();

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
      <ImageContainer
        data-testid="image-level"
        onClick={handleClick}
        image={images[imageIndex].image}
      >
        {targetAppearance && (
          <Target coordinates={coordinates}>
            <TargetImage />
            <TargetMenu>
              <li data-testid="character">Odlaw</li>
              <li data-testid="character">Waldo</li>
              <li data-testid="character">Wilma</li>
              <li data-testid="character">The Wizard</li>
              <li data-testid="character">Woof</li>
            </TargetMenu>
          </Target>
        )}
      </ImageContainer>
    </>
  );
}
