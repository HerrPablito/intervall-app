import "./analog.scss"
function Analog() {

return (
    <div className="analog">
      <div className="analogContainer">
        <p>left</p>
        <div className="setMinutes">
          <p className="setMinutes__amount">10</p>
          <p className="setMinutes__min">Minutes</p>
        </div>
        <p>right</p>
      </div>
      <div className="checkBoxes">
        <div className="checkBoxes__intervalBox">
          <h3 className="checkBoxes__intervalBox__text">intervals</h3>
        </div>
        <div className="checkBoxes__breakInterval">
          <h3 className="checkBoxes__breakInterval__text">5 minutes break/interval</h3>
        </div>
      </div>
      <button className="startBtn">
        <h2>START TIMER</h2>
      </button>
    </div>
)}

export default Analog;