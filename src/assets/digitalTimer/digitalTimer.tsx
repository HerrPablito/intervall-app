import React from 'react';
import Timer from '../digital/digital';
import './digitalTimer.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function DigitalTimer() {
    const navigate = useNavigate();
    const location = useLocation();
    const count = location.state.count;
    const numOfMinutes = count * 60;

    const handleTimeUp = () => {
        navigate("/timesUp", { state: { count } });
    }

    return (
        <div className="digitalTimer">

            <div className="timerContainer">
                <h3>interval</h3>
                <Timer time={numOfMinutes}
                    onTimeUp={handleTimeUp}
                />
                <button
                    onClick={() => {
                        navigate("/pause", { state: { count } })
                    }}
                    className='abortBtn'>
                    ABORT TIMER
                </button>
            </div>
        </div>
    )

}

export default DigitalTimer;