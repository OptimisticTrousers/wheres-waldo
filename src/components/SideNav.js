import { Link } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { StyledSideNav } from "./styled/SideNav.styled";

const SideNav = ({ changeTheme, changeGameState, theme }) => {
  return (
    <StyledSideNav>
      <div className="container">
        <Link to="leaderboard">Leaderboard</Link>
        <button type="button" onClick={changeTheme} className="theme-button">
          {theme.mode === "light" ? <BsMoon /> : <BsSun />}
        </button>
      </div>
      <button type="button" className="instructions" onClick={changeGameState}>
        Instructions
      </button>
    </StyledSideNav>
  );
};

export default SideNav;
