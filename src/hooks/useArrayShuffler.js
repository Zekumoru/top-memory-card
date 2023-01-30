import { useCallback, useState } from 'react';

function useArrayShuffler(initialArray) {
  const [array, setArray] = useState(initialArray);

  const shuffle = useCallback(() => {
    setArray((array) => {
      const shuffled = [];
      for (let i = array.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        shuffled.push(array[randomIndex]);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      }
      return shuffled;
    });
  }, []);

  return [array, shuffle];
}

export default useArrayShuffler;
