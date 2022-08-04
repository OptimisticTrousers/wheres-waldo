import styled from "styled-components";

export const LeaderboardImages = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(241px, 1fr));
  img {
    width: 241px;
    height: 160px;
  }
  p {
    padding: 1rem;
    color: ${({ theme: { mode } }) => (mode === "light" ? "black" : "white")};
  }
  & > div {
    border-radius: 0.25rem;
  }
  & > div:active{

    background-color: rgb(254, 226, 226, 1);
  }
  & > div:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;
