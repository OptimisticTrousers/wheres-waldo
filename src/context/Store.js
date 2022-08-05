/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";
import odlaw from "../assets/odlaw.jpg";
import waldo from "../assets/waldo.jpg";
import wilma from "../assets/wilma.jpg";
import wizard from "../assets/wizard.jpg";
import { firebaseConfig } from "../firebase-config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import Chance from "chance";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export const ImageContext = createContext();

const images = [
  {
    name: "beach",
    image: beach,
    characters: [
      {
        name: "odlaw",
        character: odlaw,
      },
      {
        name: "waldo",
        character: waldo,
      },
      {
        name: "wilma",
        character: wilma,
      },
      {
        name: "wizard",
        character: wizard,
      },
    ],
  },
  {
    name: "fruitland",
    image: fruitland,
    characters: [
      {
        name: "odlaw",
        character: odlaw,
      },
      {
        name: "waldo",
        character: waldo,
      },
      {
        name: "wilma",
        character: wilma,
      },
      {
        name: "wizard",
        character: wizard,
      },
    ],
  },
  {
    name: "hollywood",
    image: hollywood,
    characters: [
      {
        name: "odlaw",
        character: odlaw,
      },
      {
        name: "waldo",
        character: waldo,
      },
      {
        name: "wilma",
        character: wilma,
      },
      {
        name: "wizard",
        character: wizard,
      },
    ],
  },
  {
    name: "space",
    image: space,
    characters: [
      {
        name: "odlaw",
        character: odlaw,
      },
      {
        name: "waldo",
        character: waldo,
      },
      {
        name: "wilma",
        character: wilma,
      },
      {
        name: "wizard",
        character: wizard,
      },
    ],
  },
  {
    name: "track",
    image: track,
    characters: [
      {
        name: "odlaw",
        character: odlaw,
      },
      {
        name: "waldo",
        character: waldo,
      },
      {
        name: "wilma",
        character: wilma,
      },
      {
        name: "wizard",
        character: wizard,
      },
    ],
  },
  {
    name: "winter",
    image: winter,
    characters: [
      {
        name: "odlaw",
        character: odlaw,
      },
      {
        name: "waldo",
        character: waldo,
      },
      {
        name: "wilma",
        character: wilma,
      },
      {
        name: "wizard",
        character: wizard,
      },
    ],
  },
];

export function ImageProvider({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const [dbLeaderboard, setDbLeaderboard] = useState([]);

  const [stoppedTimer, setStoppedTimer] = useState();

  const [timer, setTimer] = useState("");
  const [userWon, setUserWon] = useState(false);
  const [charactersFound, setCharactersFound] = useState([
    {
      name: "odlaw",
      found: false,
    },
    {
      name: "waldo",
      found: false,
    },
    {
      name: "wilma",
      found: false,
    },
    {
      name: "wizard",
      found: false,
    },
    {
      name: "woof",
      found: false,
    },
  ]);

  useEffect(() => {
    async function getLeaderboardData(index) {
      const leaderboardsRef = collection(db, "leaderboards");

      const leaderboardData = await getDocs(leaderboardsRef);

      return leaderboardData;
    }

    getLeaderboardData()
      .then((data) => {
        let leaderboard = [];

        data.docs.forEach((doc) => {
          leaderboard.push({ ...doc.data(), id: doc.id });
        });

        setDbLeaderboard(leaderboard);
      })
      .catch((err) => alert("ERROR: ", err));
  }, []);

  useEffect(() => {
    charactersFound.map((character) => {
      return { ...character, found: false };
    });
  }, [imageIndex]);

  function changeTargetAppearance(event) {
    if (event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true);
    } else {
      setTargetAppearance(false);
    }
  }

  return (
    <ImageContext.Provider
      value={{
        images,
        imageIndex,
        setImageIndex,
        targetAppearance,
        changeTargetAppearance,
        charactersFound,
        setCharactersFound,
        setUserWon,
        userWon,
        dbLeaderboard,
        setTimer,
        timer,
        stoppedTimer,
        setStoppedTimer,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
