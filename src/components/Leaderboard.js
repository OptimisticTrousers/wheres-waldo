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

export default function Leaderboard() {
  const { images, dbLeaderboard, imageIndex } = useContext(ImageContext);

  const [userClickedImage, setUserClickedImage] = useState(false);
  // dbLeaderboard.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data())
  // })

  function handleLevelClick() {
    setUserClickedImage((prevValue) => !prevValue);
  }

  const renderedImages = images.map(({ image, name }, index) => {
    return (
      <div onClick={handleLevelClick} key={uniqid()}>
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
            {console.log(dbLeaderboard[imageIndex]?.leaderboard)}
            {dbLeaderboard[imageIndex]?.leaderboard?.map((data, index) => {
              console.log(data)
              return (
                <tr key={uniqid()}>
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
