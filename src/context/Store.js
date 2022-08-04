import { createContext, useContext, useEffect, useState } from "react";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";
import odlaw from "../assets/odlaw.jpg";
import waldo from "../assets/waldo.jpg";
import wenda from "../assets/wenda.jpg";
import wizard from "../assets/wizard.jpg";

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
        name: "wenda",
        character: wenda,
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
        name: "wenda",
        character: wenda,
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
        name: "wenda",
        character: wenda,
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
        name: "wenda",
        character: wenda,
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
        name: "wenda",
        character: wenda,
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
        name: "wenda",
        character: wenda,
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

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const [userWon, setUserWon] = useState(true);

  function start() {
    run();
    setStatus(1);
    setInterv(setInterv(run, 10));
  }

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  function run() {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  }

  function stop() {
    clearInterval(interv);
    setStatus(2);
  }

  function reset() {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  }
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
    charactersFound.map((character) => {
      return { ...character, found: false };
    });
  }, [imageIndex, charactersFound]);

  function changeImage(index) {
    setImageIndex(index);
  }

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
        time,
        setUserWon,
        userWon,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
