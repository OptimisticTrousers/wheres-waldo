import { StyledLeaderBoard } from "./styled/StyledLeaderBoard";

export default function Leaderboard() {
  return (
    <StyledLeaderBoard>
      <div>
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
