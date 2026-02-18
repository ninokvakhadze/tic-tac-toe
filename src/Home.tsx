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
      <MainComp>
        <Logo src={logo} />
        <ButtonsDiv>
          <Pick>PICK PLAYER 1’S MARK</Pick>
          <Buttons>
            <Button onClick={() => setChoosePlayer("X")}>X</Button>
            <Button onClick={() => setChoosePlayer("0")}>0</Button>
          </Buttons>
        </ButtonsDiv>
      </MainComp>
      <Link to={choosePlayer == "" ? "" : "single_player"}>
        <button>single player</button>
      </Link>
      <Link to={choosePlayer == "" ? "" : "multi_player"}>
        <button>multi player</button>
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
  font-size: clamp(1rem, 3vw, 2rem);
  text-align: center;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--silver);
  color: #333;
  transition: background 0.3s;

  &:hover {
    background: #ccc;
  }
`;
