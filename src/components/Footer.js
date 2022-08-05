import { StyledFooter } from "./styled/Footer.styled";
import { Container } from "./styled/Container.styled";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <p>Copyright © 2022 Tony Isern</p>
        <a href="https://github.com/OptimisticTrousers">
          <FaGithub />
        </a>
      </Container>
    </StyledFooter>
  );
}
