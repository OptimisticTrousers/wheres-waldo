import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
function App({children}) {

  const [targetAppearance, setTargetAppearance] = useState(false)

  function handleClick(event) {
    if(event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true)
    }
    else {
      setTargetAppearance(false)
    }
  }

  return (

    <div onClick={handleClick}>
      <GlobalStyles />
      <Header />
      {...children}
      {/* <Game targetAppearance={targetAppearance}/> */}
      <Footer />
    </div>
  );
}

export default App;
