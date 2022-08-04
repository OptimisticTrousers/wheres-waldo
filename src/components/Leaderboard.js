import { StyledLeaderBoard } from "./styled/StyledLeaderBoard";
import { LeaderboardImages } from "./styled/LeaderboardImages.styled";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../context/Store";
import uniqid from "uniqid";
import { useRef } from "react";

export default function Leaderboard() {
  const { images, dbLeaderboard, imageIndex } = useContext(ImageContext);

  const [userClickedImage, setUserClickedImage] = useState(false);
  // dbLeaderboard.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data())
  // })

  const [leaderboardIndex, setLeaderboardIndex] = useState(0)

  function handleLevelClick() {
    setUserClickedImage((prevValue) => !prevValue);
  }

  const renderedImages = images.map(({ image, name }, index) => {
    return (
      <div onClick={() => setLeaderboardIndex(index)} key={uniqid()} style={{backgroundColor: index === leaderboardIndex && "rgb(254, 226, 226, 1)"}}>
        <img src={image} alt={name} />
        <p>Level {index + 1}</p>
      </div>
    );
  });


  return (
    <StyledLeaderBoard>
      <div>
        <LeaderboardImages>{renderedImages}</LeaderboardImages>
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
            {console.log(dbLeaderboard[leaderboardIndex]?.leaderboard)}
            {dbLeaderboard[leaderboardIndex]?.leaderboard?.sort((a, b) => a.time - b.time).map((data, index) => {
              return (
                <tr key={uniqid()} >
                  <td>#{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledLeaderBoard>
  );
}
