import React from 'react';
import '../index.css';

function Header(props) {
    let idName = "";
    idName = props.timerOn ? "timerOnStyle" : "";
    return <div className="timer" id={idName}>
        <span>{("0" + Math.floor(props.times / 60000) % 60).slice(-2)}:
            {("0" + Math.floor(props.times / 1000) % 60).slice(-2)}:
            {("0" + ((props.times / 10) % 100)).slice(-2)}</span>
    </div>
}
export default Header;