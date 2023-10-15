import { StyledHeader } from "./styled/Header.styled";
import headerLogo from "../assets/optimistictrousers.jpg";
import { BsMoon } from "react-icons/bs";
import { Container } from "./styled/Container.styled";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { ImageContext } from "../context/Store";
import React, { useContext, useEffect, useRef } from "react";
import uniqid from "uniqid";
import { Timer } from "./Timer";
import HeaderRight from "./HeaderRight";

const Header = ({ changeTheme, theme, changeGameState }) => {
  const { images, imageIndex, charactersFound, setStoppedTimer, userWon } =
    useContext(ImageContext);

  const timerComponent = useRef(null);

  useEffect(() => {
    setStoppedTimer(timerComponent);
  }, [userWon, setStoppedTimer]);

  const renderedImages = images[imageIndex].characters.map(
    (character, index) => {
      const characterStyle = {
        opacity: charactersFound[index].found && 0.4,
      };
      return (
        <div key={uniqid()}>
          <img
            src={character.character}
            alt={character.name}
            style={characterStyle}
          />
          <p>{character.name}</p>
        </div>
      );
    }
  );

  return (
    <StyledHeader>
      <Container className="content">
        <div className="container">
          <Link to="/">
            <img
              className="logo"
              src={headerLogo}
              alt="a smiling pair of pants"
            />
          </Link>
          <h2 ref={timerComponent}>{<Timer />}</h2>
        </div>
        <div className="characters">{renderedImages}</div>
        <HeaderRight theme={theme} changeTheme={changeTheme} changeGameState={changeGameState}/>
      </Container>
    </StyledHeader>
  );
};

export default Header;
