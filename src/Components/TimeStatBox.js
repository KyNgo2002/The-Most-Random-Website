import React from 'react';
import TimeItem from './TimeItem.js';
import Time from './Time.js';

function TimeStatBox(props) {
    let length = props.timeArr.length;
    let timeArray = props.timeArr;
    let max = 0;
    let min = 100000;
    let total = 0;
    let average = 0;
    let standDeviation = 0;

    //Find Average/Mean
    timeArray.forEach((timeItem) => {
        if (timeItem < min) min = timeItem;
        if (timeItem > max) max = timeItem;
        total += timeItem;
    })
    average = Math.floor(total / length);
    timeArray.forEach((timeItem) => {
        standDeviation += Math.pow((timeItem - average), 2)
    });
    standDeviation = Math.ceil(Math.sqrt(standDeviation / length));

    function findLast(n) {
        let answer = 0;
        for (let i = 1; i <= n; i++) {
            answer += timeArray[length - i];
        }
        return Math.floor(answer / n);
    }

    return <div className="timeStatBox">
        <div className="TimesBox"><text style={{ fontSize: "20px" }}>Time</text>

            <ul style={length > 9 ? { overflowY: "visible" } : { overflowY: "hidden" }}>
                {timeArray.map((timeItem, index) => {
                    return (
                        <TimeItem
                            delete={props.delete}
                            time={timeItem}
                            id={index}
                            key={index}
                        />)
                })}
            </ul>
            <button id="clearButton" onClick={props.clearFunction}>Clear All</button>
        </div>
        <div className="StatsBox">
            <text style={{ position: "absolute", left: "42%", fontSize: "20px" }}>Stats</text>
            <div className="leftStatsBox">
                <text className="statsBoxText">Best :</text>
                <text className="statsBoxText">Worst :</text>
                <text className="statsBoxText">Average :</text>
                <text className="statsBoxText">S. Deviation :</text>
                <text className="statsBoxText">Last 3 AVG:</text>
                <text className="statsBoxText">Last 5 AVG:</text>
            </div>
            <div className="rightStatsBox">
                <text className="statsBoxText">{min < 100000 ? <Time time={min} /> : <Time time={0} />}</text>
                <text className="statsBoxText">{max > 0 ? <Time time={max} /> : <Time time={0} />}</text>
                <text className="statsBoxText">{average > 0 ? <Time time={average} /> : <Time time={0} />}</text>
                <text className="statsBoxText">{standDeviation > 0 ? <Time time={standDeviation} /> : <Time time={0} />}</text>
                <text className="statsBoxText">{length > 2 ? <Time time={findLast(3)} /> : <Time time={0} />}</text>
                <text className="statsBoxText">{length > 4 ? <Time time={findLast(5)} /> : <Time time={0} />}</text>
            </div>
        </div>
    </div>

}

export default TimeStatBox;