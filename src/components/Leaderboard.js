import { StyledLeaderBoard } from "./styled/StyledLeaderBoard.styled";
import { LeaderboardImages } from "./styled/LeaderboardImages.styled";
import { useContext, useState } from "react";
import { ImageContext } from "../context/Store";
import uniqid from "uniqid";

export default function Leaderboard() {
  const { images, dbLeaderboard } = useContext(ImageContext);

  const [leaderboardIndex, setLeaderboardIndex] = useState(0);

  const renderedImages = images.map(({ image, name }, index) => {
    return (
      <div
        onClick={() => setLeaderboardIndex(index)}
        key={uniqid()}
        style={{
          backgroundColor:
            index === leaderboardIndex && "rgb(254, 226, 226, 1)",
        }}
      >
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
            {dbLeaderboard[leaderboardIndex]?.leaderboard
              ?.sort((a, b) => a.time - b.time)
              .map((data, index) => {
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
