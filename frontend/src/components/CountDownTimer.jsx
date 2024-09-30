import React, { useState, useRef, useEffect } from "react";

const CountDownTimer = ({ countDownTime }) => {
  const Ref = useRef(null);

  // State to hold the time in seconds
  const [timeLeft, setTimeLeft] = useState(countDownTime * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false); // State to track whether the timer is running
  const [activeSpan, setActiveSpan] = useState("pomodoro"); // Single state to track the active span

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes > 9 ? minutes : "0" + minutes}:${secs > 9 ? secs : "0" + secs}`;
  };

  const updateTimer = () => {
    setTimeLeft((prev) => {
      if (prev <= 0) {
        stopTimer(); // Stop the timer when it reaches 0
        return 0; // Prevent negative time
      }
      return prev - 1; // Decrease time by 1 second
    });
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      if (Ref.current) clearInterval(Ref.current);

      const id = setInterval(updateTimer, 1000);
      Ref.current = id;
    }
  };

  const stopTimer = () => {
    if (Ref.current) {
      clearInterval(Ref.current);
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer(); // Stop the timer before resetting
    setTimeLeft(countDownTime * 60); // Reset to 25 minutes
  };

  // Toggle the timer between start and stop
  const toggleTimer = () => {
    if (isRunning) {
      stopTimer(); // If the timer is running, stop it
    } else {
      startTimer(); // If the timer is stopped, start it
    }
  };

  // Cleanup the interval on component unmount
  useEffect(() => {
    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  }, []);

  return (
    <div className="mt-10 tracking-wider text-white py-5 backdrop-blur bg-white/15 max-w-lg mx-auto">
      <div className="flex justify-center gap-x-7">
        {/* Pomodoro Span */}
        <span
          className={`cursor-pointer px-2.5 py-0.5 rounded-sm ${
            activeSpan === "pomodoro" ? "backdrop-blur bg-white/15" : ""
          }`}
          onClick={() => setActiveSpan("pomodoro")}
        >
          Pomodoro
        </span>

        {/* Short Break Span */}
        <span
          className={`cursor-pointer px-2.5 py-0.5 rounded-sm ${
            activeSpan === "shortBreak" ? "backdrop-blur bg-white/15" : ""
          }`}
          onClick={() => setActiveSpan("shortBreak")}
        >
          Short Break
        </span>

        {/* Long Break Span */}
        <span
          className={`cursor-pointer px-2.5 py-0.5 rounded-sm ${
            activeSpan === "longBreak" ? "backdrop-blur bg-white/15" : ""
          }`}
          onClick={() => setActiveSpan("longBreak")}
        >
          Long Break
        </span>
      </div>

      <div className="font-bold mt-4">
        <h2 className="text-9xl font-arialRounded">{formatTime(timeLeft)}</h2>
        <button
          className={`mb-2 text-customRed bg-white rounded-md border px-14 py-3 mt-6 text-2xl 
          transition-shadow duration-200 active:shadow-[0_0px_0_0_rgba(212,211,214,1)]`}
          onClick={toggleTimer}
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
