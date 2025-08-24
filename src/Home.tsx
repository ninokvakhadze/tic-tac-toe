import { Link } from "react-router-dom";


interface HomeProps {
  choosePlayer: string;
  setChoosePlayer: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ choosePlayer, setChoosePlayer }: HomeProps) {

    return (
        <div>
            <h1>Welcome to Tic-Tac-Toe!</h1>
            <button onClick={()=> setChoosePlayer("X")}>X</button>
            <button onClick={()=> setChoosePlayer("0")}>0</button>

           <Link to={choosePlayer == "" ? "" : "single_player"}><button>single player</button></Link> 
           <Link to={choosePlayer == "" ? "" : "multi_player"}><button>multi player</button></Link> 
        </div>
    );
}

export default Home;