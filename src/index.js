import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { ImageProvider } from "./context/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ImageProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Game />} />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </ImageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
