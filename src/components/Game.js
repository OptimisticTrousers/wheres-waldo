import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import photo1 from "../assets/photo1.jpg";
import { StyledSelection } from "./styled/Selection.styled";
import { useState, useRef } from "react";
export default function Game() {
  const [clickInfo, setClickInfo] = useState({});

  const container = useRef()

  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffSet: "50%",
    verticalOffSet: "0%",
  }));

  function handleClick(event) {
    let verticalOffSet, horizontalOffSet;
    // console.log(event)
    if (event.target.parentNode.parentNode.nodeName === "MAIN") {
      //verticalOffSet = event.target.parentNode.offsetParent.offsetLeft;
      //horizontalOffSet = event.target.parentNode.offsetParent.offsetTop;
      verticalOffSet = event.target.offsetParent.offsetX
      horizontalOffSet = event.target.offsetParent.offsetY
      console.log("Parent Vertical" + verticalOffSet)
      console.log("Parent Horizontal" + horizontalOffSet)
      setCoordinates({ verticalOffSet, horizontalOffSet });
    } else {
      verticalOffSet = event.nativeEvent.offsetX;
      horizontalOffSet = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffSet, horizontalOffSet });
    }
    //console.log("Horizontal Offset: " + horizontalOffSet)
    //console.log("Vertical Offset: " + verticalOffSet)
  }

  return (
    <StyledGame>
      <Container ref={container} onClickCapture={handleClick}>
        <StyledSelection coordinates={coordinates}>Selection</StyledSelection>
      </Container>
    </StyledGame>
  );
}
