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
    horizontalOffSet: "50%",
    verticalOffSet: "0%",
  }));

  useEffect(() => {

    async function queryCoordinates() {
      const photoRef = doc(db, "photo1", "waldo")
      const photoSnap = await getDoc(photoRef)

      if(photoSnap.exists()) {
        console.log("Document data: ", photoSnap.data())
      } else {
        console.log("No such document!")
      }
    }

    queryCoordinates();

  }, [])

  function handleClick(event) {
    let verticalOffSet, horizontalOffSet;
    // console.log(event)
    if (event.target.parentNode.parentNode.nodeName !== "MAIN") {
      verticalOffSet = event.nativeEvent.offsetX;
      horizontalOffSet = event.nativeEvent.offsetY;
      console.log("Vertical: " + verticalOffSet);
      console.log("Horizontal: " + horizontalOffSet);
      setCoordinates({ verticalOffSet, horizontalOffSet });
    }


    //else {
    //verticalOffSet = event.target.parentNode.offsetParent.offsetLeft;
    //horizontalOffSet = event.target.parentNode.offsetParent.offsetTop;
    //verticalOffSet = event.target.offsetParent.offsetX
    //horizontalOffSet = event.target.offsetParent.offsetY
    //console.log("Parent Vertical" + verticalOffSet)
    //console.log("Parent Horizontal" + horizontalOffSet)
    //setCoordinates({ verticalOffSet, horizontalOffSet });
    //}
    //console.log("Horizontal Offset: " + horizontalOffSet)
    //console.log("Vertical Offset: " + verticalOffSet)
  }

  return (
    <StyledGame>
      <Container onClickCapture={handleClick}>
        <Target coordinates={coordinates}>
          <TargetImage />
          <TargetMenu>
            <li>Waldo</li>
            <li>The Wizard</li>
            <li>Wilma</li>
          </TargetMenu>
        </Target>
      </Container>
    </StyledGame>
  );
}
