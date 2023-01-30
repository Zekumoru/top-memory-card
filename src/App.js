import './styles/App.scss';
import Cards from './components/Cards';
import Header from './components/Header';
import usePokemon from './hooks/usePokemon';
import { useEffect, useState } from 'react';
import useArrayShuffler from './hooks/useArrayShuffler';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorage('best-score', 0);
  const [pokemons, shufflePokemons] = useArrayShuffler(usePokemon().pokemons);
  const [picked, setPicked] = useState([]);

  useEffect(() => {
    shufflePokemons();
  }, [shufflePokemons]);

  const checkIfPickedTwice = (name) => {
    return !!picked.find((f) => f === name);
  };

  const handleCardClick = (name) => {
    if (checkIfPickedTwice(name)) {
      setScore(0);
      if (score > bestScore) setBestScore(score);

      setPicked([]);
      shufflePokemons();

      return;
    }

    setPicked([...picked, name]);
    setScore((score) => score + 1);
    shufflePokemons();
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
