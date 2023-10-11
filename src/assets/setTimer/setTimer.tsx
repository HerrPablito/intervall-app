import "./setTimer.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DropdownMenu from "./dropdownMenu/dropdownMenu";

function SetTimer() {
  const navigate = useNavigate();
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }



  return (
    <div className="setTimer">
      <div className="menuContainer">
        <div className="menuTrigger">

          <DropdownMenu />
        </div>
      </div>

      <div className="btnContainer">

        <button onClick={decrementCount} className="subtract">
          -
        </button>
        <div className="setMinutes">
          <p className="setMinutes__amount">{count}</p>
          <p className="setMinutes__min">Minutes</p>
        </div>
        <button onClick={incrementCount} className="addition">
          +
        </button>
      </div>
      <div className="checkBoxes">
        <div className="checkBoxes__intervalBox">
          <h3 className="checkBoxes__intervalBox__text">intervals</h3>
        </div>
        <div className="checkBoxes__breakInterval">
          <h3 className="checkBoxes__breakInterval__text">
            5 minutes break/interval
          </h3>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/digital", { state: { count: count } })
        }}
        className="startBtn"
      >
        <h2 className="startBtn__startText">START TIMER</h2>
      </button>
    </div>
  );
}
export default SetTimer;
