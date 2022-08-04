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

export default function Header({ changeTheme, theme, changeGameState }) {
  const { images, imageIndex } = useContext(ImageContext);

  const renderedImages = images[imageIndex].characters.map((character) => {
    return (
      <div key={uniqid()}>
        <img src={character.character} alt={character.name} />
        <p>{character.name}</p>
      </div>
    );
  });
  return (
    <StyledHeader>
      <Container>
        <div>
          <Link to="/">
            <img
              className="logo"
              src={headerLogo}
              alt="a smiling pair of pants"
            />
          </Link>
          <h1>Optimistic Games</h1>
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
