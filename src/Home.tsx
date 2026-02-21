import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import { styled } from "styled-components";

interface HomeProps {
  choosePlayer: string;
  setChoosePlayer: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ choosePlayer, setChoosePlayer }: HomeProps) {
  return (
    <MainDiv>
      <Logo src={logo} />
      <MainComp>
        <ButtonsDiv>
          <Pick>PICK PLAYER 1’S MARK</Pick>
          <Buttons>
            <Button onClick={() => setChoosePlayer("X")}>X</Button>
            <Button onClick={() => setChoosePlayer("0")}>0</Button>
          </Buttons>
        </ButtonsDiv>
      </MainComp>
      <Link
        style={{ width: "100%" }}
        to={choosePlayer == "" ? "" : "single_player"}
      >
        <PlayerButton
          bg="rgba(101, 233, 228, 1)"
          shadow="rgba(17, 140, 135, 1)"
        >
          NEW GAME (VS CPU)
        </PlayerButton>
      </Link>
      <Link
        style={{ width: "100%" }}
        to={choosePlayer == "" ? "" : "multi_player"}
      >
        <PlayerButton bg="rgba(255, 200, 96, 1)" shadow="rgba(204, 139, 19, 1)">
          NEW GAME (VS PLAYER)
        </PlayerButton>
      </Link>
    </MainDiv>
  );
}

export default Home;

const MainDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
`;

const MainComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 16px;
  background-color: rgba(31, 54, 65, 1);
  box-shadow: 0px -8px 0px 0px rgba(16, 33, 42, 1) inset;
  padding: 40px 20px;
`;

const Logo = styled.img`
  width: clamp(80px, 10vw, 150px);
  height: auto;
`;

const Pick = styled.h2`
  color: var(--silver);
  font-size: clamp(0.6rem, 1vw, 0.85rem);
  text-align: center;
  // padding: 0 5rem;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1.25rem 2rem;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--silver);
  color: #333;
  transition: background 0.3s;
  padding: 1rem 5rem;
  &:hover {
    background: #ccc;
  }
`;

interface PlayerButtonProps {
  bg?: string;
  shadow?: string;
}

const PlayerButton = styled.button<PlayerButtonProps>`
  padding: 1.25rem 1.3rem;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--silver);
  color: #333;
  transition: background 0.3s;
  width: 100%;
  box-sizing: border-box;
  background: ${({ bg }) => bg || "var(--silver)"};
  box-shadow: 0px -8px 0px 0px ${({ shadow }) =>
      shadow || "rgba(16, 33, 42, 1)"} inset;
`;
