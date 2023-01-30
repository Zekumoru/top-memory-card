import { useCallback, useState } from 'react';

function useArrayShuffler(array) {
  const [arr, setArr] = useState(array);

  const shuffle = useCallback(() => {
    setArr((arr) => {
      const shuffled = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        shuffled.push(arr[randomIndex]);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
      }
      return shuffled;
    });
  }, []);

  return [arr, shuffle];
}

export default useArrayShuffler;
