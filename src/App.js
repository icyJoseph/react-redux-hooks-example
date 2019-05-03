import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter, SET } from "./ducks/counter";
import Count from "./Count";
import logo from "./logo.svg";
import "./App.css";

function useSquared() {
  const square = useSelector(state => state.counter * state.counter);
  return square;
}

function useReset() {
  const dispatch = useDispatch();
  const toZero = useCallback(() => dispatch({ type: SET, payload: 0 }), [
    dispatch
  ]);
  return toZero;
}

function App() {
  // set up a ticker
  const [ticks, setTicks] = useState(0);
  // and make it tick every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTicks(ticks + 1);
    }, 1000);

    return () => clearInterval(interval);
  });
  // get the dispatch method from redux store using useDispatch
  const dispatch = useDispatch();
  // get the count using useSelector
  const count = useSelector(state => state.counter);
  // get the increase dispatcher from useRedux
  const increase = useCallback(() => dispatch(increaseCounter()), [dispatch]);
  // get the decrease dispatcher from useActions
  const decrease = useCallback(() => dispatch(decreaseCounter()), [dispatch]);
  // use a custom hook to get a pre-calculated value
  const squared = useSquared();

  // using the dispatch method, create an action
  const setToRandom = useCallback(
    () =>
      dispatch({
        type: SET,
        payload: Math.floor(100 * Math.random())
      }),
    [dispatch]
  );

  // use Reset
  const reset = useReset();

  return (
    <div className="App">
      <header className="App-header">
        <p>{ticks}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Count
          count={count}
          squared={squared}
          increase={increase}
          decrease={decrease}
          setToRandom={setToRandom}
          reset={reset}
        />
      </header>
    </div>
  );
}

export default App;
