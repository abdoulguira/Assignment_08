// Use state for the currently selected color
// Use state for the currently selected grid

import React from "react";
import Table from "./components/Table";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 5, // right now we have to manually set rows and columns
      columns: 5,
      color: "transparent"
    }
  }
  
  

  render() {
    
    return (
      <div>
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
        <div className="selectColor">
          <div>
            <label htmlFor="color">Select a Color</label>
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
        <div><Table state={this.state}></Table></div>
      </div>
    );
  }
}
