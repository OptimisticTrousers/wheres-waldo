import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import { Target } from "./styled/Target.styled";
import { useState} from "react";
import { TargetImage } from "./styled/TargetImage.styled";
import { TargetMenu } from "./styled/TargetMenu.styled";
export default function Game() {
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffSet: "50%",
    verticalOffSet: "0%",
  }));

  function handleClick(event) {
    let verticalOffSet, horizontalOffSet;
    // console.log(event)
    if (event.target.parentNode.parentNode.nodeName !== "MAIN") {
      verticalOffSet = event.nativeEvent.offsetX;
      horizontalOffSet = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffSet, horizontalOffSet });
    } //else {
    //verticalOffSet = event.target.parentNode.offsetParent.offsetLeft;
    //horizontalOffSet = event.target.parentNode.offsetParent.offsetTop;
    //verticalOffSet = event.target.offsetParent.offsetX
    //horizontalOffSet = event.target.offsetParent.offsetY
    //console.log("Parent Vertical" + verticalOffSet)
    //console.log("Parent Horizontal" + horizontalOffSet)
    //setCoordinates({ verticalOffSet, horizontalOffSet });
    //}
    //console.log("Horizontal Offset: " + horizontalOffSet)
    //console.log("Vertical Offset: " + verticalOffSet)
  }

  return (
    <StyledGame>
      <Container onClickCapture={handleClick}>
        <Target coordinates={coordinates}>

          <TargetMenu>
            <li>y</li>
            <li>y</li>
            <li>y</li>
            <li>y</li>
          </TargetMenu>
        </Target>
      </Container>
    </StyledGame>
  );
}
