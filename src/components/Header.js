import { StyledHeader } from "./styled/Header.styled";
import headerLogo from "../assets/optimistictrousers.jpg";
import { BsMoon } from "react-icons/bs";
import { Container } from "./styled/Container.styled";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import odlaw from "../assets/odlaw.jpg";
import waldo from "../assets/waldo.jpg";
import wenda from "../assets/wenda.jpg";
import wizard from "../assets/wizard.jpg";
import { ImageContext } from "../context/Store";
import { useContext } from "react";
import uniqid from "uniqid";

export default function Header({ changeTheme, theme, changeGameState, time }) {
  const { images, imageIndex, charactersFound } = useContext(ImageContext);


  const renderedImages = images[imageIndex].characters.map((character, index) => {
  const characterStyle = {
    opacity: charactersFound[index].found && "0.7"
  }
    return (
      <div key={uniqid()}>
        <img src={character.character} alt={character.name} style={characterStyle}/>
        <p>{character.name}</p>
      </div>
    );
  });
  return (
    <StyledHeader>
      <Container className="content">
        <div>
          <Link to="/">
            <img
              className="logo"
              src={headerLogo}
              alt="a smiling pair of pants"
            />
          </Link>
          <h2>OptimisticTrousers</h2>
        </div>
        <div>{renderedImages}</div>
        <div>
          <Link to="leaderboard">Leaderboard</Link>
          <button
            type="button"
            className="instructions"
            onClick={changeGameState}
          >
            Instructions
          </button>
          <button type="button" onClick={changeTheme} className="theme-button">
            {theme.mode === "light" ? <BsMoon /> : <BsSun />}
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
}
