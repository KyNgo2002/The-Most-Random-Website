import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header.js';
import TimeStatBox from './Components/TimeStatBox.js';
import LineChart from './Components/LineChart.js';
import Rubix from './Rubix.png';


function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTiming] = useState(false);
  const [timeArr, setTimeArr] = useState([]);

  function clearAll() {
    setTimeArr(() => {
      return [];
    })
    document.getElementById('header').click();

  }

  function handleDelete(id) {
    setTimeArr(prevArr => {
      return prevArr.filter((timeItem, index) => {
        return id !== index;
      })
    })
  }

  function handleSpace(e) {
    if (e.code === "KeyR" && !timerOn) {
      setTime(() => 0);
    }
    if (e.code === "Space") {
      setTiming(() => {
        return !timerOn;
      })
    }

  }
  // function handleReset(e){
    
  //   if(e.code === "Space" && !timerOn && time === 0){
  //     setTiming(()=>{
  //       return true;
  //     })
  //   }
  //   else if(e.code === "Space" && !timerOn && time !== 0){
  //     setTime(()=>{
  //       return 0;
  //     }, ()=>{
  //       console.log(time);
  //     })

  //   }
  // }
  useEffect(() => {
    
    document.addEventListener("keyup", handleSpace);
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 10;
        });
      }, 10);
    }
    else {
      clearInterval(interval);
    }
    if (!timerOn && time !== 0) {
      setTimeArr((prev) => {
        return [...prev, time];
      })
    }
    return () => {
      clearInterval(interval);
      document.removeEventListener("keyup", handleSpace);
    };

  }, [timerOn]);

  return (
    <div>

      <Header times={time} timerOn={timerOn} />
      {!timerOn ? <div className="container">
        <TimeStatBox clearFunction={clearAll} timeArr={timeArr} delete={handleDelete} className="timeStatBox" />
        <LineChart timeArr={timeArr} />
        <img src={Rubix} className="image" alt="Rubix cube"></img>
      </div> : <div style={{ height: "0px" }}></div>}


    </div>

  );
}

export default App;
