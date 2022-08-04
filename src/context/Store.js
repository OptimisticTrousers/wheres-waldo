import { createContext, useContext, useState } from "react";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";

export const ImageContext = createContext();

const images = [
  {
    name: "beach",
    image: beach,
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
    <ImageContext.Provider value={{ images, imageIndex, setImageIndex, targetAppearance, handleClick}}>
      {children}
    </ImageContext.Provider>
  );
}
