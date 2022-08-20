import { Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { StyledHeaderRight } from "./styled/HeaderRight.styled";

const HeaderRight = ({ changeTheme, changeGameState, theme }) => {
  return (
    <StyledHeaderRight>
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
    </StyledHeaderRight>
  );
};

export default HeaderRight;
