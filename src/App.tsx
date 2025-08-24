import { useState } from "react";
import "./App.css";
import Home from "./Home"
import { MultiPlayer } from "./multiPlayer";
import { SinglePlayer } from "./singlePlayer";
import { Routes, Route } from "react-router-dom";

export interface Player {
  choosePlayer: string;
}

function App() {
  const [choosePlayer, setChoosePlayer] = useState("")
  return (
    <>
    <Routes>
      <Route path="" element={<Home choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer}/>}/>
      <Route path="/multi_player" element={<MultiPlayer/>}/>
      <Route path="/single_player" element={<SinglePlayer choosePlayer={choosePlayer}/>}/>
    </Routes>
    </>
  );
}

export default App;


