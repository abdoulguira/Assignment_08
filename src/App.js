// Use state for the currently selected color
// Use state for the currently selected grid

import React from "react";

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

    </div>
      </div>
    )
  }
}
