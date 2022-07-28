import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import photo1 from "../assets/photo1.jpg";
import { StyledSelection } from "./styled/Selection.styled";
import { useState, useRef} from "react";
export default function Game() {

  const [clickInfo, setClickInfo] = useState({})

  const [coordinates, setCoordinates] = useState(() => {})

  function handleClick(event) {
    console.log(event)
    const verticalOffSet = event.nativeEvent.offsetX;
    const horiontalOffSet= event.nativeEvent.offsetY
    setCoordinates({verticalOffSet, horiontalOffSet});
    console.log("Horizontal Offset: " + horiontalOffSet)
    console.log("Vertical Offset: " + verticalOffSet)
  }
  return (
    <StyledGame >
      <Container onClick={handleClick}>
        <img
          src={photo1}
          alt="drawing of a beach with a lot of people"
        />
        <StyledSelection coordinates={coordinates}>
          Selection
        </StyledSelection>
      </Container>
    </StyledGame>
  );
}
