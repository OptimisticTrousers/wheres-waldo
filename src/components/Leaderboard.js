import { StyledLeaderBoard } from "./styled/StyledLeaderBoard";
import { LeaderboardImages } from "./styled/LeaderboardImages.styled";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";
import { useState } from "react";

export default function Leaderboard() {
  const [userClickedImage, setUserClickedImage] = useState(false);

  function handleClick(event) {
    setUserClickedImage((prevValue) => !prevValue);
  }

  const style = {
    backgroundColor: userClickedImage && "rgb(254, 226, 226, 1)",
  };
  return (
    <StyledLeaderBoard>
      <div>
        <LeaderboardImages>
          <div onClick={handleClick}>
            <img src={beach} />
            <p>Level 1</p>
          </div>
          <div onClick={handleClick}>
            <img src={fruitland} />
            <p>Level 2</p>
          </div>
          <div onClick={handleClick}>
            <img src={hollywood} />
            <p>Level 3</p>
          </div>
          <div onClick={handleClick}>
            <img src={space} />
            <p>Level 4</p>
          </div>
          <div onClick={handleClick}>
            <img src={track} />
            <p>Level 5</p>
          </div>
          <div onClick={handleClick}>
            <img src={winter} />
            <p>Level 6</p>
          </div>
        </LeaderboardImages>
        <table>
          <caption>Leaderboard</caption>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledLeaderBoard>
  );
}
