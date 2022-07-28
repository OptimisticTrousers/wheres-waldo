import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import photo1 from "../assets/photo1.jpg";
import { useState, useRef} from "react";
export default function Game() {

  const [clickInfo, setClickInfo] = useState({})

  const image = useRef(null)


  function handleClick(event) {
    console.log(event)
    const verticalOffSet = event.nativeEvent.offsetX;
    const horiontalOffSet= event.nativeEvent.offsetY
    console.log("Horizontal Offset: " + horiontalOffSet)
    console.log("Vertical Offset: " + verticalOffSet)
  }
  return (
    <StyledGame>
      <Container>
        <img
          onClick={handleClick}
          src={photo1}
          alt="drawing of a beach with a lot of people"
        />
        <div>
          Selection
        </div>
      </Container>
    </StyledGame>
  );
}
