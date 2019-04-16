import React, { useReducer } from 'react';
import './App.css';

let allCells = 256;
let cells = new Array(allCells).fill('white');

function clear() {
  return {
    type: "clear_image"
  };
}

function reducer(state, action) {
  let newGrid = [...state];

  switch (action.type) {
    case 'fill_cell':
      newGrid[action.id] = action.color;
      return newGrid;
    case 'clear_image':
      return cells;
    default:
      return state;
  }
}

function action(id) {
  return { type: "fill_cell", id, color: "red" }
}

function Grid(props) {
  return (
    <div className="App">

      <h1>Ritprogram</h1>
      <div className='grid'>{
        props.cells.map((cell, idx) => (
          <div
            className='cell'
            key={idx} style={{ backgroundColor: cell, border: '1px solid black' }}
            onClick={() => props.onClickCell(idx)}
          />))}
      </div>

    </div>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, cells);

  return (
    <>
      <Grid cells={state} onClickCell={(idx) => {
        console.log(idx);
        dispatch(action(idx));
      }} />
      <button className='clear' onClick={() => dispatch(clear())}>Reset</button>
    </>
  );
}

export default App;
