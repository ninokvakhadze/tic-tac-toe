import { useState } from "react";
import { GameBox, Cell, ScoresDiv, Score } from "./styles";
import PlayerX from "./assets/icon-x.svg";
import PlayerO from "./assets/icon-o.svg";

export function MultiPlayer() {
  const [player, setPlayer] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [endGame, setEndGame] = useState({ player1: 0, tie: 0, player2: 0 });
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (player: string, currentCells: string[]) => {
    for (let combination of winnerCombinations) {
      const [a, b, c] = combination;
      if (
        currentCells[a] == player &&
        currentCells[b] == player &&
        currentCells[c] == player
      ) {
        if (player === "X") {
          setEndGame((prev) => ({ ...prev, player1: prev.player1 + 1 }));
        } else if (player === "0") {
          setEndGame((prev) => ({ ...prev, player2: prev.player2 + 1 }));
        }
        console.log(`${player} won`);
        return player;
      }
    }
    if (!currentCells.includes("")) {
      setEndGame((prev) => ({ ...prev, tie: prev.tie + 1 }));
      return "tie";
    }
  };

  const handleClick = (index: number) => {
    if (cells[index] !== "") return;

    const newCells = cells.map((cell, i) => (i === index ? player : cell));
    setCells(newCells);
    checkWinner(player, newCells);

    setPlayer((prev) => (prev === "X" ? "0" : "X"));
  };

  return (
    <>
      <button
        onClick={() => {
          setCells(Array(9).fill("")), setPlayer("X");
        }}
      >
        restart
      </button>
      <GameBox>
        {cells.map((value, i) => (
          <Cell key={i} onClick={() => handleClick(i)}>
            {value === "X" && <img src={PlayerX} alt="X" />}
            {value === "0" && <img src={PlayerO} alt="O" />}
          </Cell>
        ))}
      </GameBox>
      <ScoresDiv>
        <Score bg="#65E9E4">X {endGame.player1}</Score>
        <Score bg="var(--silver)">tie {endGame.tie}</Score>
        <Score bg="#E9B451">O {endGame.player2}</Score>
      </ScoresDiv>
    </>
  );
}
