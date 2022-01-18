import React, {useState} from "react";

export default function TableCell(props) {
    const [color, setColor] = useState("transparent")

    const changeColor = () => {
        setColor(props.color)
    }

    return <div className="cell" style={{backgroundColor : color}} onClick={changeColor}></div>
}