import { useState } from "react";
import styled from "styled-components";

export function SinglePlayer() {
 const [cells, setCells] = useState(Array(9).fill(""));
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
   for(let combination of winnerCombinations) {
        const [a,b,c] = combination;
        if(currentCells[a] == player && currentCells[b] == player && currentCells[c] == player){
            console.log(`${player} won`)
        }
   }

 };


const handleClick = (index: number) => {
  if (cells[index] !== "") return;

  const newCells = cells.map((cell, i) => (i === index ? "X" : cell));
  setCells(newCells);
  checkWinner("X", newCells);

  const emptyIndices = newCells
    .map((cell, i) => (cell === "" ? i : null))
    .filter((i) => i !== null) as number[];

  if (emptyIndices.length === 0) return; 

  const pcStep = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  const finalCells = newCells.map((cell, i) => (i === pcStep ? "0" : cell));

  setCells(finalCells);
  checkWinner("0", finalCells);
};

    
    
  

  return (
    <GameBox>
      {cells.map((value, i) => (
        <Cell key={i} onClick={() => handleClick(i)} >
          {value}
        </Cell>
      ))}
    </GameBox>
  );

}

const GameBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    width: 300px;
    height: 300px;
    background-color: #333;
    padding: 5px;
`;

const Cell = styled.div`
    background-color: #fff;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #eee;
    }
`;
