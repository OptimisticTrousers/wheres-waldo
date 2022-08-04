import styled from "styled-components";

export const StyledLeaderBoard = styled.main`
  height: auto;
  width: 95%;

  div {
    background-color: white;
    border-radius: 5px;
    margin: 1rem;
  }

  caption {
    width: 100%;
    text-align: start;
    padding: 1rem;
    border-bottom: 1px solid #f8f9f9;
  }
  th {
    padding: 1rem;
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
