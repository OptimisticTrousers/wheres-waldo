import { StyledHeader } from "./styled/Header.styled";
import headerLogo from "../assets/optimistictrousers.jpg";
import { BsMoon } from "react-icons/bs";
import { Container } from "./styled/Container.styled";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <img src={headerLogo} alt="a smiling pair of pants" />
        </Link>
        <div>
          <Link to="leaderboard">Leaderboard</Link>
          <button type="button">
            <BsMoon />
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
}
