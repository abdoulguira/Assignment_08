// Use state for the currently selected color
// Use state for the currently selected grid

import React from "react";
import Table from "./components/Table";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 5, 
      columns: 0, // right now we have to manually set rows
      color: "transparent"
    }
  }
  
  addColumn = () => {
    if (this.state.rows === 0) {
      this.resetStateToOne()
      return
    }
    this.setState(prevState => ({columns: prevState.columns + 1,}))
  }

  deleteColumn = () => {
    if (this.state.columns === 1) {
      this.resetState()
      return
    }
    this.setState(prevState => ({columns: prevState.columns - 1,}))
  }

  render() {
    
    return (
      <div>
        <h1>React Painter</h1>
        <div className="buttons">
          <button onClick={this.addColumn}>Add Column</button>
          <button>Add Row</button>
          <button onClick={this.deleteColumn}>Remove Column</button>
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
