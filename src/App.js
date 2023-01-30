import './styles/App.scss';
import Cards from './components/Cards';
import Header from './components/Header';
import usePokemon from './hooks/usePokemon';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const { pokemons } = usePokemon();

  const handleCardClick = (name) => {
    console.log(name);
  };

  return (
    <div className="App">
      <Header />
      <div className="score">
        <h2>Score: {score}</h2>
        <p>Best score: {bestScore}</p>
      </div>
      <Cards items={pokemons} onClick={handleCardClick} />
    </div>
  );
}

export default App;
