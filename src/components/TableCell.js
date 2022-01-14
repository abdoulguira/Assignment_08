import React, {useEffect, useState} from "react";

export default function TableCell(props) {
    const [color, setColor] = useState("transparent")
    const [active, setActive] = useState(false)
    const changeColor = () => {
        setColor(props.color)
    }

    return <div className="cell" style={{backgroundColor : color}} onClick={changeColor}></div>
}