// Use state for the currently selected color
// Use state for the currently selected grid

import React from "react";
import Table from "./components/Table";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 0, 
      columns: 0, 
      color: "transparent"
    }
  }
  

  addRow = () => {
    if (this.state.columns === 0) {
      this.resetStateToOne()
      return
    }
    this.setState(prevState => ({rows: prevState.rows + 1,}))
  }

  deleteRow = () => {
    if (this.state.rows <= 1) {
      this.resetState()
      return
    }
    this.setState(prevState => ({rows: prevState.rows - 1,}))
  }

  addColumn = () => {
    if (this.state.rows === 0) {
      this.resetStateToOne()
      return
    }
    this.setState(prevState => ({columns: prevState.columns + 1,}))
  }

  deleteColumn = () => {
    if (this.state.columns <= 1) {
      this.resetState()
      return
    }
    this.setState(prevState => ({columns: prevState.columns - 1,}))
  }

  resetState = () => {
    this.setState({rows: 0, columns: 0})
  }

  resetStateToOne = () => {
    this.setState({rows: 1, columns: 1})
  }

  setColor = (event) => {
    this.setState({color : event.target.value})
  }


  render() {
  console.log(this.state)
    return (
      <div className="page">
        <h1>React Painter</h1>
        <div className="buttons">
          <button onClick={this.addColumn}>Add Column</button>
          <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.deleteColumn}>Remove Column</button>
          <button onClick={this.deleteRow}>Remove Row</button>
          {/*<button>Fill Uncolored</button>*/}
          {/*<button>Fill All</button>*/}
          {/*<button>Reset Colors</button>*/}
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
