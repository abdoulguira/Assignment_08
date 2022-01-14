import React from "react";
import TableCell from "./TableCell"

export default function TableRow(props) {

    const gridColumns = []
    const columns = props.columns



    for(let i = 0; i < columns; i++) {
        gridColumns.push(<TableCell></TableCell>)
    }
        return (
            <div className="row">
                {gridColumns}
            </div>
        )
}