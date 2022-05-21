import { useState } from 'react';

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (!replace) {
      setHistory((prev) => prev.splice(-1, newMode));
    }
    setMode(newMode);
    setHistory((prev) => [...prev, mode]);
  };

  const back = () => {
    const lastMode = history.pop();
    setMode(lastMode);
  };

  return { mode, transition, back };
};

export default useVisualMode;
