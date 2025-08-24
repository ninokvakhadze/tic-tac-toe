import { useState, useEffect } from "react";
import { GameBox, Cell } from "./styles";
import type { Player } from "./App";

export function SinglePlayer({ choosePlayer }: Player) {
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

  const firstMove = () => {
    const emptyBoard = Array(9).fill("");
    if (choosePlayer == "0") {
      const randomIndex = Math.floor(Math.random() * 9);
      const newBoard = emptyBoard.map((cell, i) =>
        i === randomIndex ? "X" : ""
      );
      setCells(newBoard);
    }
  };

  useEffect(() => {
    firstMove();
  }, []);

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

    const newCells = cells.map((cell, i) =>
      i === index ? (choosePlayer == "X" ? "X" : "0") : cell
    );
    setCells(newCells);
    checkWinner("X", newCells);

    const emptyIndices = newCells
      .map((cell, i) => (cell === "" ? i : null))
      .filter((i) => i !== null) as number[];

    if (emptyIndices.length === 0) return;

    const pcStep =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const finalCells = newCells.map((cell, i) =>
      i === pcStep ? (choosePlayer == "X" ? "0" : "X") : cell
    );

    setCells(finalCells);
    checkWinner("0", finalCells);
  };

  return (
    <>
      <div>
        <div>player1 {endGame.player1}</div>
        <div>tie {endGame.tie}</div>
        <div>player2 {endGame.player2}</div>
      </div>
      <button
        onClick={() => {
          firstMove();
        }}
      >
        restart
      </button>
      <GameBox>
        {cells.map((value, i) => (
          <Cell key={i} onClick={() => handleClick(i)}>
            {value}
          </Cell>
        ))}
      </GameBox>
    </>
  );
}


