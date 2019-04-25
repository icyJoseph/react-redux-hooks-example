import React from "react";
import { useRedux, useActions, useSelector, useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter, SET } from "./ducks/counter";
import logo from "./logo.svg";
import "./App.css";

function useSquared() {
  const square = useSelector(state => state.counter * state.counter);
  return square;
}

function useReset() {
  const toZero = useActions(() => ({ type: SET, payload: 0 }));
  return toZero;
}

function App() {
  // get the increase dispatcher from useRedux
  const [count, increase] = useRedux(state => state.counter, increaseCounter);
  // get the decrease dispatcher from useActions
  const decrease = useActions(decreaseCounter);
  // get the dispatch method from redux store using useDispatch
  const dispatch = useDispatch();
  // use a custom hook to get a pre-calculated value
  const squared = useSquared();

  // using the dispatch method, create an action
  const setToRandom = () =>
    dispatch({
      type: SET,
      payload: Math.floor(100 * Math.random())
    });

  // use Reset
  const reset = useReset();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count is: <code>{count}</code>
        </p>
        <p>
          Squared count is: <code>{squared}</code>
        </p>
        <div>
          <button onClick={increase}>INC</button>
          <button onClick={decrease}>DEC</button>
          <button onClick={setToRandom}>Random</button>
          <button onClick={reset}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
