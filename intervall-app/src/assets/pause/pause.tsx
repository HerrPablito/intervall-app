import "./pause.scss"
import React, { useState } from "react";
import pauseBtn from "./../images/Frame 6.svg";
//import { useLocation } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";


console.log("hej");

function Pause() {



  return (
    <div className="alarm">
      <div className="alarmContainer">
        <img src={pauseBtn} alt="pause" />

        <h1 className="alarmContainer__alarmText">Pause & breath</h1>
        <h3 className="alarmContainer__time">
          0300
        </h3>
        <button className="alarmContainer__btn">
          NO PAUSE, GO NOW!
        </button>
      </div>

    </div>
  );
}
export default Pause;