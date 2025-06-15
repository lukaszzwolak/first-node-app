import React, { useState, useRef } from "react";
import { render } from "react-dom";

const App = () => {
  const [status, setStatus] = useState("off");
  const [time, setTime] = useState(0);
  const timer = useRef(null);

  return (
    <div>
      <h1>Protect your eyes</h1>
      <p>
        According to optometrists in order to save your eyes, you should follow
        the 20/20/20. It means you should to rest your eyes every 20 minutes for
        20 seconds by looking more than 20 feet away.
      </p>
      <p>
        This app will help you track your time and inform you when it's time to
        rest.
      </p>

      <img src="./images/work.png" />
      <img src="./images/rest.png" />

      <div className="timer">{formatTime(time)}</div>

      <button className="btn">Start</button>
      <button className="btn">Stop</button>
      <button className="btn btn-close">X</button>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

render(<App />, document.querySelector("#app"));
