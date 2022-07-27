import { StyledHeader } from "./styled/Header.styled";
import headerLogo from '../assets/optimistictrousers.jpg'
export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <img src={headerLogo} alt="a smiling pair of pants" />
      </nav>
    </StyledHeader>
  )
}