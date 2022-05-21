import { useState } from 'react';

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      return setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    }
    setHistory((prev) => [...prev, newMode]);
  };

  const back = () => {
    if (history.length < 2) return;
    const historyCopy = [...history];
    historyCopy.pop();
    setHistory(historyCopy);
    setMode(historyCopy[historyCopy.length - 1]);
  };

  return { mode, transition, back };
};

export default useVisualMode;
