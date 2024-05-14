import { useEffect, useState } from "react";

export const useProgress = () => {
  const [state, setState] = useState("initial"); // initial, in-progress, complete
  const [value, setValue] = useState(0);

  const start = () => {
    setState("in-progress");
  };

  useEffect(() => {
    let t = setInterval(
      () => {
        if (state === "in-progress") {
          if (value >= 60 && value < 80) {
            setValue(value + 2);
          } else if (value >= 80 && value < 95) {
            setValue(value + 0.5);
          } else if (value >= 95) {
            setValue(95);
          } else {
            setValue(value + 5);
          }
        } else if (state === "complete") {
          setValue(100);
          clearInterval(t);
        }
      },
      state === "in-progress" ? 600 : null
    );

    return () => clearInterval(t);
  }, [state, value]);

  const done = () => {
    setState("complete");
  };

  const reset = () => {
    setState("initial");
    setValue(0);
  };

  useEffect(() => {
    let t;
    if (value === 100) {
      t = setTimeout(() => {
        reset();
      }, 300);
    }

    return () => clearTimeout(t);
  }, [value]);

  return {
    state,
    value,
    start,
    done,
    reset,
  };
};