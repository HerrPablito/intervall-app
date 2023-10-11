import "./timesUp.scss";
import alarm from "./../images/alarmicon.svg";
import { useNavigate } from "react-router-dom";




function TimesUp() {
  const navigate = useNavigate();

  return (
    <div className="timesUp">
      <div className="timesContainer">
        <img src={alarm} alt="Alarm" />

        <h1 className="timesContainer__timesUpText">Times up!</h1>
        <button
          onClick={() => {
            navigate("/setTimer")
          }}
          className="timesContainer__btn">
          SET NEW TIMER
        </button>
      </div>

    </div>
  );
}
export default TimesUp;