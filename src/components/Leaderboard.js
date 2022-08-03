import { StyledLeaderBoard } from "./styled/StyledLeaderBoard";

export default function Leaderboard() {
  return (
    <StyledLeaderBoard>
      <table>
        <caption>Leaderboard</caption>
        <thead>
          <th>Position</th>
          <th>Name</th>
          <th>Time</th>
        </thead>
        <tbody>
          <td>#1</td>
          <td>Leandro Rezende</td>
          <td>12</td>
        </tbody>
      </table>
    </StyledLeaderBoard>
  );
}
