import React from 'react';
import '../index.css';

function TimeItem(props) {
    return <li className="timeElement">

            {props.id + 1 + ".       "}        
                <span>{("0" + Math.floor(props.time / 60000) % 60).slice(-2)}:</span>
                <span>{("0" + Math.floor(props.time / 1000) % 60).slice(-2)}:</span>
                <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
            <div className="buttonText" onClick = {() => {props.delete(props.id)}}> delete</div>

        
    </li>
}

export default TimeItem;