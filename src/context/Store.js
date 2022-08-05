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
import { firebaseConfig } from "../firebase-config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocFromCache,
  getDoc,
  DocumentSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
import Chance from "chance";

import ReactStopwatch from "react-stopwatch";
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

const chance = new Chance();

const DEFAULT_OBJECT = {
  time: Math.floor(Math.random() * 1000) + 100,
};
export function ImageProvider({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const [dbLeaderboard, setDbLeaderboard] = useState([]);

  const [resetTimer, setResetTimer] = useState(false);
  const [timer, setTimer] = useState("");
  const [userWon, setUserWon] = useState(false);

  useEffect(() => {
    setResetTimer(true);
  }, [imageIndex]);

  useEffect(() => {
    async function getLeaderboardData(index) {
      const leaderboardsRef = collection(db, "leaderboards");

      // const q = query(leaderboardsRef, orderBy("time", "desc"), limit(7));

      const leaderboardData = await getDocs(leaderboardsRef);

      return leaderboardData;
      // const data = await getDocs(collection(db, "leaderboards"), orderBy("time", "desc"), limit(7));

      // return data;
    }

    async function addStuff() {
      await setDoc(doc(db, "leaderboards", "space"), {
        leaderboard: Array.from(new Array(7), (user) => ({
          name: chance.name(),
          time: Math.floor(Math.random() * 1000) + 100,
        })),
      });
    }

    // addStuff();

    getLeaderboardData()
      .then((data) => {
        let leaderboard = [];

        data.docs.forEach((doc) => {
          leaderboard.push({ ...doc.data(), id: doc.id });
        });

        setDbLeaderboard(leaderboard);

        // setDbLeaderboard(data.docs);
        // setDbLeaderboard(data.docChanges()[0].doc.data().levels);
      })
      .catch((err) => alert("ERROR: ", err));
  }, []);

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

  const timerComponent = (
    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit="00:00:10"
      autoStart={resetTimer === false && userWon === false}
      onChange={({hours, minutes, seconds}) => {
      }}
      onCallback={() => {
      }}
      render={({ formatted, hours, minutes, seconds }) => {
        return (
          <div>
            <p>{formatted}</p>
          </div>
        );
      }}
    />
  );

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
        resetTimer,
        setTimer,
        timer,
        setResetTimer,
        timerComponent
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
