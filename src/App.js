import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {

  const [targetAppearance, setTargetAppearance] = useState(false)

  function handleClick(event) {
    console.log("EVENT: ", event)
    if(event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true)
    }
    else {
      setTargetAppearance(false)
    }
  }

  function timer() {
    let sec = 30

    let timer = setInterval(function() {

    })
  }

  return (

    <div onClick={handleClick}>
      <GlobalStyles />
      <Header />
      <Game targetAppearance={targetAppearance}/>
      <Footer />
    </div>
  );
}

export default App;
