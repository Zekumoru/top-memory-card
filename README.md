# Pokemon Memory

The [second React project](https://www.theodinproject.com/lessons/node-path-javascript-memory-card) from the JavaScript course of The Odin Project.

## Objective

Use functional components and hooks to create this project.

## Notes

It's been a very quick and fun project (3 hours of development!), and I got myself to make three custom hooks to facilitate and make my code less cluttered. Matter of fact, my code in this project is like 500% more readable than my code on the [CV project](https://github.com/Zekumoru/top-cv-application).

All in all, I used to question _Why use functional components?_ because I used to think that class components are elegant and much more structured because of my background on Java and Android development but boy was I wrong! **I'll never use class components again!**

## Custom Hooks

### usePokemon

```js
const { pokemons, image } = usePokemon(name?)
```

Returns the stored pokemons data array and an optional image which is null if no `name` is provided or `name` does not exist / invalid.

### useLocalStorage

```js
const [value, setValue] = useLocalStorage(key, initialValue);
```

Functions the same as the `useState` hook, only difference is that `value` is saved to local storage with the provided `key`.

### useArrayShuffler

```js
const [array, shuffleArray] = useArrayShuffler(initialArray);
```

Returns an array which includes the function `shuffleArray` which shuffles `array`.

> Calling `shuffleArray()` will update `array` on the next render. `array` is basically a state.
