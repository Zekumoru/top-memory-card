const DATA = [
  {
    name: 'Bulbasaur',
    image: require('../images/bulbasaur.png'),
  },

  {
    name: 'Caterpie',
    image: require('../images/caterpie.png'),
  },
  {
    name: 'Charmander',
    image: require('../images/charmander.png'),
  },
  {
    name: 'Ekans',
    image: require('../images/ekans.png'),
  },
  {
    name: 'Pidgey',
    image: require('../images/pidgey.png'),
  },
  {
    name: 'Pikachu',
    image: require('../images/pikachu.png'),
  },
  {
    name: 'Rattata',
    image: require('../images/rattata.png'),
  },
  {
    name: 'Sandshrew',
    image: require('../images/sandshrew.png'),
  },
  {
    name: 'Spearow',
    image: require('../images/spearow.png'),
  },
  {
    name: 'Squirtle',
    image: require('../images/squirtle.png'),
  },
  {
    name: 'Vulpix',
    image: require('../images/vulpix.png'),
  },
  {
    name: 'Weedle',
    image: require('../images/weedle.png'),
  },
];

function usePokemon(name = '') {
  const image =
    name === ''
      ? null
      : DATA.find((f) => f.name.toLowerCase() === name.toLowerCase()).image;
  return {
    pokemons: DATA,
    image,
  };
}

export default usePokemon;
