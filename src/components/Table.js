import React from "react";
import TableRow from "./TableRow";


export default function Table(props) {
    const rows =  props.state.rows
    const columns = props.state.columns

    const gridRows = []
    for(let i = 0; i < rows; i++) {
        gridRows.push(<TableRow columns={columns}></TableRow>)
    }
    
    return (
        <div className="grid">
            {gridRows}
        </div>
    )
}
