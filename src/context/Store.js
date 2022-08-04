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
        character: odlaw
      },
      {
        name: "waldo",
        character:waldo 
      },
      {
        name: "wenda",
        character:wenda
      },
      {
        name: "wizard",
        character:wizard
      },
    ]
  },
  {
    name: "fruitland",
    image: fruitland,
  },
  {
    name: "hollywood",
    image: hollywood,
  },
  {
    name: "space",
    image: space,
  },
  {
    name: "track",
    image: track,
  },
  {
    name: "winter",
    image: winter,
  },
];
export function ImageProvider({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    charactersFound.map(character => {
      return {...character, found: false}
    })
  }, [imageIndex])

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

  function changeImage(index) {
    setImageIndex(index);
  }

  function handleClick(event) {
    if (event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true);
    } else {
      setTargetAppearance(false);
    }
  }

  return (
    <ImageContext.Provider value={{ images, imageIndex, setImageIndex, targetAppearance, handleClick, charactersFound, setCharactersFound}}>
      {children}
    </ImageContext.Provider>
  );
}
