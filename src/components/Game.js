import { Target } from "./styled/Target.styled";
import { useEffect, useState, useContext, useRef } from "react";
import { TargetMenu } from "./styled/TargetMenu.styled";
import { firebaseConfig } from "../firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ImageContainer } from "./styled/ImageContainer.styled";
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
    charactersFound,
    setCharactersFound,
    setUserWon,
  } = useContext(ImageContext);
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffset: "50%",
    verticalOffset: "0%",
  }));

  const [dbCoordinates, setDbCoordinates] = useState(null);

  const [numberOfCharactersFound, setNumberOfCharactersFound] = useState(0);

  const targetContainer = useRef(null);

  useEffect(() => {
    async function queryCoordinates() {
      const photoCollection = collection(db, images[imageIndex].name);

      const querySnapshot = await getDocs(photoCollection);

      return querySnapshot;
    }
    queryCoordinates().then((databasePhotoData) => {
      setDbCoordinates(databasePhotoData.docChanges());
    });
  }, [imageIndex, images]);

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

    if (numberOfCharactersFound === 3) {
      setUserWon(true);
    }
    if (
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

    const {x, y, top, left, bottom, right}= targetContainer.current.getClientRects();
    console.log(targetContainer.current.getClientRects());
    
     if (event.target.parentNode.nodeName === "SECTION") {
      const verticalOffset = event.nativeEvent.offsetX;
      const horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
    }
    // else {

    //   const verticalOffset = event.target.parentNode.offsetX;
    //   const horizontalOffset = event.target.parentNode.offsetY;
    //   setCoordinates({ verticalOffset, horizontalOffset});
    // }
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

  function resetTarget(event) {
    changeCoordinates(event);
    setShowTargetMenu(false);
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
          onClickCapture={resetTarget}
          data-testid="image-level"
          onMouseMoveCapture={showTargetMenu === false ? changeCoordinates: undefined}
          image={images[imageIndex].image}
        >
          <Target coordinates={coordinates} onClickCapture={handleTargetMenu}ref={targetContainer} >
            {showTargetMenu && (
              <TargetMenu>
                {images[imageIndex].characters.map(({ character, name }) => {
                  return (
                    <li
                      key={uniqid()}
                      onClick={() => handleTargetClick(name)}
                    >
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
