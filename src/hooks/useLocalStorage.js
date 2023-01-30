import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const retrieved = JSON.parse(localStorage.getItem(key));
    if (retrieved) return retrieved;
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const set = (value) => {
    const calculatedValue = typeof value === 'function' ? value() : value;
    setValue(calculatedValue);
  };

  return [value, set];
}

export default useLocalStorage;
