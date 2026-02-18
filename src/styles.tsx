import styled from "styled-components";

export const GameBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  width: min(90vw, 400px);
  height: min(90vw, 400px);
  background-color: #333;
  padding: 5px;
`;

export const Cell = styled.div`
  background-color: #fff;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 4vw, 2rem);
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background-color: #eee;
  }
`;
