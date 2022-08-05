import React, {Fragment, useContext, useEffect, useState} from "react";
import { formatTime } from "../utils";

import { ImageContext } from "../context/Store";
export function Timer() {
  const [timer, setTimer] = useState(0);

  const {userWon} = useContext(ImageContext)

  useEffect(() => {
    let interval;
    if(!userWon) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    } 
    // else if(userWon) {
    //   clearInterval(interval)
    //   setTimer(0)
   
 //
    return () => {
      clearInterval(interval)
    }
  }, [userWon])

  return <>{formatTime(timer)}</>
}