import styled from "styled-components";

export const GameBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  width: min(90vw, 400px);
  height: min(90vw, 400px);
  background-color: var(--dark-navi);
  padding: 5px;
`;

export const Cell = styled.div`
  background: rgba(31, 54, 65, 1);
  box-shadow: 0px -8px 0px 0px rgba(16, 33, 42, 1) inset;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 4vw, 2rem);
  cursor: pointer;
  transition: background 0.2s;
`;
