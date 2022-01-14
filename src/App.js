// Use state for the currently selected color
// Use state for the currently selected grid

import React from "react";
import Table from "./components/Table";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 5, 
      columns: 5, 
      color: "transparent"
    }
  }
  

  addRow = () => {
    this.setState(prevState => ({rows: prevState.rows + 1,}))
  }

  deleteRow = () => {
    this.setState(prevState => ({rows: prevState.rows - 1,}))
  }

  addColumn = () => {
    this.setState(prevState => ({columns: prevState.columns + 1,}))
  }

  deleteColumn = () => {
    this.setState(prevState => ({columns: prevState.columns - 1,}))

  }

  setColor = (event) => {
    this.setState({color : event.target.value})
  }

  render() {
    return (
      <div className="page">
        <h1>React Painter</h1>
        <div className="buttons">
          <button onClick={this.addColumn}>Add Column</button>
          <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.deleteColumn}>Remove Column</button>
          <button onClick={this.deleteRow}>Remove Row</button>
          <button>Fill Uncolored</button>
          <button>Fill All</button>
          <button>Reset Colors</button>
        </div>
        <div className="selectColor">
          <div>
            <label htmlFor="color">Select a Color</label>
            <select name="color" id="color-selector" onChange={this.setColor}>
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
