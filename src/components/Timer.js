import React, { useContext, useEffect} from "react";
import { formatTime } from "../utils";

import { ImageContext } from "../context/Store";
export function Timer() {

  const { userWon, timer, setTimer } = useContext(ImageContext);

  useEffect(() => {
    let interval;
    if (!userWon) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [userWon, setTimer]);

  return <>{formatTime(timer)}</>;
}
