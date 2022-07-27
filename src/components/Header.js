import { StyledHeader } from "./styled/Header.styled";
import headerLogo from "../assets/optimistictrousers.jpg";
import { BsMoon } from "react-icons/bs";
export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <img src={headerLogo} alt="a smiling pair of pants" />
        <button type="button">
          <BsMoon />
        </button>
      </nav>
    </StyledHeader>
  );
}
