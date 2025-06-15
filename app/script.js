import React, { useState, useRef, useMemo } from "react";
import { createRoot } from "react-dom/client";

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

  const playBell = () => {
    const bell = new Audio("./sounds/bell.wav");
    bell.play();
  };

  const startTimer = () => {
    setTime(1200);
    setStatus("work");

    timer.current = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;

        if (newTime <= 0) {
          const nextStatus = status === "work" ? "rest" : "work";
          const nextTime = nextStatus === "work" ? 1200 : 20;
          setStatus(nextStatus);
          return nextTime;
        }

        return newTime;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
    setTime(0);
    setStatus("off");
  };

  const closeApp = () => {
    window.close();
  };

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

      {status === "off" && (
        <button className="btn" onClick={startTimer}>
          Start
        </button>
      )}

      {status !== "off" && (
        <button className="btn" onClick={stopTimer}>
          Stop
        </button>
      )}

      <button className="btn btn-close" onClick={closeApp}>
        X
      </button>
    </div>
  );
};

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
