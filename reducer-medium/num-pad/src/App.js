import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: '' };

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      if (state.count.length < 10) {
        return { count: state.count + action.amount };
      } else {
        return state;
      }
    case 'decrement':
      return { count: state.count.slice(0, -1) };
    case 'reset':
      return init(action.restart);
    default:
      return state;
  }
}

function NumPad() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <header className="App-header">
        <h1>{state.count}</h1>
        <div className='container'>

          <button onClick={() =>
            dispatch({ type: 'increment', amount: 9 })}>9</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 8 })}>8</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 7 })}>7</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 6 })}>6</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 5 })}>5</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 4 })}>4</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 3 })}>3</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 2 })}>2</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 1 })}>1</button>
          <button onClick={() =>
            dispatch({ type: 'increment', amount: 0 })}>0</button>
          <button onClick={() =>
            dispatch({ type: 'decrement' })}>Clean</button>
          <button onClick={() =>
            dispatch({ type: 'reset', restart: '' })}> Reset </button>
        </div>
      </header>
    </div>
  );
}

export default NumPad;
