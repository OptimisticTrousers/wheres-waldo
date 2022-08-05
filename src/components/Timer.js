import React, { useContext, useEffect, useRef, useState } from "react";
import { formatTime } from "../utils";

import { ImageContext } from "../context/Store";
export function Timer() {
  const [timer, setTimer] = useState(0);

  const { userWon, imageIndex } = useContext(ImageContext);

  const oldImageIndex = useRef(imageIndex)

  useEffect(() => {
    let interval;
    if (!userWon) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }

    if(oldImageIndex !== imageIndex) {
      setTimer(0)
    }

    return () => {
      clearInterval(interval);
    };
  }, [userWon, imageIndex]);

  return <>{formatTime(timer)}</>;
}
