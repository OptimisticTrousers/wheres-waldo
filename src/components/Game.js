import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import photo1 from '../assets/photo1.jpg'
export default function Game() {
  return (
    <StyledGame>
      <Container>
        <img src={photo1} alt="drawing of a beach with a lot of people"/>
      </Container>
    </StyledGame>
  );
}
