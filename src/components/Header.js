import { StyledHeader } from "./styled/Header.styled";
import headerLogo from "../assets/optimistictrousers.jpg";
import { BsMoon } from "react-icons/bs";
import { Container } from "./styled/Container.styled";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <img src={headerLogo} alt="a smiling pair of pants" />
        <button type="button">
          <BsMoon />
        </button>
      </Container>
    </StyledHeader>
  );
}
