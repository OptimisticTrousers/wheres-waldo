import styled from "styled-components";

export const StyledLeaderBoard = styled.div`
  height: auto;
  width: 100%;
  --background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(56, 56, 56)" : "white"};
  --row-even-background: ${({ theme: { mode } }) =>
    mode === "light" ? "rgb(250, 250, 250)" : "#2a2a2a"};
  --row-odd-background: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};

  & > div {
    background-color: var(--background-color);
    padding: 1rem;
  }

  caption {
    font-size: 1.5rem;
    font-weight: 900;
    width: 100%;
    text-align: start;
    padding: 1rem;
    color: var(--text-color);
    margin-top: 1rem;
  }
  .active {
    color: black;
  }

  th {
    color: var(--background-color);
    font-weight: 900;
    padding: 1rem;
    background-color: #ebedf0;
  }

  table {
    width: 100%;
  }

  th {
    color: var(--text-color);
    font-weight: 900;
    padding: 1rem;
    background-color: var(--row-even-background);
  }

  td {
    padding: 1rem;
    color: var(--text-color);
  }

  tbody {
    width: 100%;
    text-align: center;
  }

  tr:nth-child(even) td {
    background-color: var(--row-even-background);
  }

  tr:nth-child(odd) td {
    background-color: var(--row-odd-background);
  }

  tr:hover > td:nth-child(1) {
    border-left: 6px solid #69b2e1;
  }

  tr:hover {
    cursor: pointer;
  }
`;
