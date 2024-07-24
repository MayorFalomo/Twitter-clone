import { useState, useEffect } from "react";

// First we export a function that takes in two arguments, on eis a string and the other is the number of time it should take
export const useDebounce = (value: string, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value); //We then set a state to to use the argument that we are passing

  //!The useEffect here runs a setTimeOut function that takes a certain amount of milliseconds that should pass before we set the state to the argument that we are passing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    //?Then we run a clean up function for that function using the clearTimeout to clear the time to avoid memory leakage
    return () => {
      clearTimeout(handler);
    };
    //*In the UseEffect dependency array I add the value and time so the function should be updated when this two things change
  }, [value, milliSeconds]);

  //Lastly i set the function to Return the debounced string Value
  return debouncedValue;
};
