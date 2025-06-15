import React, { useState, useRef } from "react";
import { render } from "react-dom";

const App = () => {
  const [status, setStatus] = useState("off");
  const [time, setTime] = useState(0);
  const timer = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const formattedTime = useMemo(() => formatTime(time), [time]);

  return (
    <div>
      <h1>Protect your eyes</h1>

      {status === "off" && (
        <div>
          <p>
            According to optometrists in order to save your eyes, you should
            follow the 20/20/20 rule. That means every 20 minutes, you should
            rest your eyes for 20 seconds by looking at something 20 feet away.
          </p>
          <p>
            This app will help you keep track of time and notify you when it's
            time to rest.
          </p>
        </div>
      )}

      {status === "work" && <img src="./images/work.png" alt="work" />}
      {status === "rest" && <img src="./images/rest.png" alt="rest" />}

      {status !== "off" && <div className="timer">{formattedTime}</div>}

      {status === "off" && <button className="btn">Start</button>}

      {status !== "off" && <button className="btn">Stop</button>}

      <button className="btn btn-close">X</button>
    </div>
  );
};
render(<App />, document.querySelector("#app"));
