import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import usePokemon from './hooks/usePokemon';

function App() {
  const { pokemons } = usePokemon();

  return (
    <div className="App">
      <Header />
      <Cards items={pokemons} />
    </div>
  );
}

export default App;
