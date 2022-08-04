import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledContent } from "./components/styled/Game.styled";
import { StyledDropdown } from "./components/styled/Dropdown.styled";
function App({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);

  const [theme, setTheme] =  useState({mode: "light"})

  function handleClick(event) {
    if (event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true);
    } else {
      setTargetAppearance(false);
    }
  }

  function changeTheme() {
    setTheme(prevTheme => {
      if(prevTheme.mode === "light") {
        return {mode: "dark"}
      }
      else if(prevTheme.mode === "dark") {
        return {mode: "light"}
      }
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header changeTheme={changeTheme}/>
      <StyledContent>
        <Outlet targetAppearance={targetAppearance}/>
      </StyledContent>
      {/* <Game targetAppearance={targetAppearance}/> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
