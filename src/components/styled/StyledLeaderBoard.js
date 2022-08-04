import styled from "styled-components";

export const StyledLeaderBoard = styled.main`
  height: auto;
  width: 95%;
  --background-color: ${({ theme: { mode } }) =>
    mode === "light" ? "white" : "rgb(56, 56, 56)"};
  --text-color: ${({ theme: { mode } }) =>
    mode === "light" ? "black" : "white"};
  border: 10px solid var(--text-color);
  animation: fadeIn ease 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  & > div {
    background-color: var(--background-color);
    border-radius: 5px;
    margin: 1rem;
  }

  caption {
    width: 100%;
    text-align: start;
    padding: 1rem;
    border-bottom: 1px solid #f8f9f9;
    color: var(--text-color);
  }
  th {
    color: black;
    font-weight: 900;
    padding: 1rem;
    background-color: #ebedf0;
  }
  table {
    width: 100%;
  }
  td {
    padding: 1rem;
  }
  tr {
    margin: 0;
  }
  tbody {
    width: 100%;
    text-align: center;
  }
  tr:nth-child(even) td {
    background-color: rgb(250, 250, 250);
  }

  tr:nth-child(odd) td {
    background-color: white;
  }

  tr {
    border: 10px solid red;
  }

  tr:hover > td:nth-child(1) {
    border-left: 6px solid #69b2e1;
  }
  tr:hover {
    cursor: pointer;
  }
`;
