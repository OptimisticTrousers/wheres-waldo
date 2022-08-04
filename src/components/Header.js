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
export default function Header({ changeTheme, theme }) {
  return (
    <StyledHeader>
      <Container>
        <div>
          <Link to="/">
            <img className="logo" src={headerLogo} alt="a smiling pair of pants" />
          </Link>
          <h1>Optimistic Games</h1>
        </div>
        <div>
          <div>
            <img src={odlaw} alt="odlaw" />
            <p>Odlaw</p>
          </div>
          <div>
            <img src={waldo} alt="waldo" />
            <p>Waldo</p>
          </div>
          <div>
            <img src={wenda} alt="wenda" />
            <p>Wenda</p>
          </div>
          <div>
            <img src={wizard} alt="wizard" />
            <p>Wizard</p>
          </div>
        </div>
        <div>
          <Link to="leaderboard">Leaderboard</Link>
          <button type="button" onClick={changeTheme}>
            {theme.mode === "light" ? <BsMoon /> : <BsSun />}
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
}
