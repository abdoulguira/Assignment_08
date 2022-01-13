// Use state for the currently selected color
// Use state for the currently selected grid

import React from "react";
import Table from "./components/Table"

export default class App extends React.Component {
  
  
  
  render() {
    return (
      <div>
        {/* <h1 style={{color: "blue"}}>React Painter</h1> */}
        <h1>React Painter</h1>
        <div className="buttons">
          <button>Add Column</button>
          <button>Add Row</button>
          <button>Remove Column</button>
          <button>Remove Row</button>
          <button>Fill Uncolored</button>
          <button>Fill All</button>
          <button>Reset Colors</button>
        </div>
        <div class="selectColor">
          <div>
            <label for="color">Select a Color</label>
            <select name="color" id="color-selector">
              <option value="transparent">Clear</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
        </div>

        <Table />
        {/* We need to use state in order to draw out the grid */}


      </div>
    )
  }
}
