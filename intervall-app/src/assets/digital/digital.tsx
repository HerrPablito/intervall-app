import "./digital.scss";
import React from "react";

interface State {
  time: number;
  seconds: number;
  minutes: number;
}
console.log("test");

interface Props {
  time: number;
  onTimeUp: () => void;
}



const Timer: React.FC<Props> = ({ time, onTimeUp }) => {
  //debugger;
  const [state, setState] = React.useState<State>({
    time,
    seconds: time - Math.floor((time - 1) / 60) * 60 - 1, // 59
    minutes: Math.floor((time - 1) / 60), // 0
  });

  React.useEffect(() => {

    const timerId = setTimeout(() => {
      if (state.time === 0) {
        onTimeUp();
        return () => {
          clearTimeout(timerId);
        };
      }
      setState({
        time: state.time - 1,
        minutes: Math.floor((state.time - 1) / 60),
        seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
      });
    }, 1000);
  }, [state.time, onTimeUp]);
  return (
    <div className="digitalTimer">
      <div className="timerContainer">
        <h2>{`${state.minutes}:${state.seconds <= 10 ? `0${state.seconds}` : state.seconds
          }`}</h2>
      </div>
    </div>
  );
};
export default Timer;
