import { StyledGame } from "./styled/Game.styled";
import { Container } from "./styled/Container.styled";
import { Target } from "./styled/Target.styled";
import { useEffect, useState } from "react";
import { TargetImage } from "./styled/TargetImage.styled";
import { TargetMenu } from "./styled/TargetMenu.styled";
import { GoLocation } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function Game() {
  const [coordinates, setCoordinates] = useState(() => ({
    horizontalOffset: "50%",
    verticalOffset: "0%",
  }));

  const [dbCoordinates, setDbCoordinates] = useState(() => null);

  const [userWon, setUserWon] = useState(() => false);

  useEffect(() => {
    async function queryCoordinates() {
      const photoRef = doc(db, "photo1", "waldo");
      const photoSnap = await getDoc(photoRef);

      const photoData = photoSnap.data();

      return photoData;
    }
    if (dbCoordinates === null) {

      queryCoordinates().then(databasePhotoData => {
        setDbCoordinates(databasePhotoData.coordinates);
      });
    } else {
      const { horizontalCoordinates, verticalCoordinates } = dbCoordinates;
      const { horizontalOffset, verticalOffset } = coordinates;

      console.log("Database: " , dbCoordinates)
      console.log("User: " , coordinates)

      if (
        verticalCoordinates - 20 <= verticalOffset &&
        verticalCoordinates >= verticalOffset &&
        horizontalCoordinates - 45 <= horizontalOffset &&
        horizontalCoordinates >= horizontalOffset
      ) {
        setUserWon((prevValue) => !prevValue);
      }
    }
  }, [coordinates]);

  function handleClick(event) {
    let verticalOffset, horizontalOffset;
    if (event.target.parentNode.parentNode.nodeName !== "MAIN") {
      verticalOffset = event.nativeEvent.offsetX;
      horizontalOffset = event.nativeEvent.offsetY;
      setCoordinates({ verticalOffset, horizontalOffset });
    }
  }

  return (
    <StyledGame>
      <Container onClickCapture={handleClick}>
        <Target coordinates={coordinates}>
          <TargetImage />
          <TargetMenu>
            <li>The Wizard</li>
            <li>Odlaw</li>
          </TargetMenu>
        </Target>
      </Container>
    </StyledGame>
  );
}
