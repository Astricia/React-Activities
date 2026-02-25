"use client";
import { useState, useEffect } from "react";

export default function Timer({ onComplete }) {
  const SESSION_TIME = 25 * 60; // 25 minutes

  const [timeLeft, setTimeLeft] = useState(SESSION_TIME);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setRunning(false);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [running, timeLeft, onComplete]);

  const formatTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-4">
      <h2 className="text-xl font-semibold">Focus Timer</h2>
      <div className="text-4xl font-bold">{formatTime()}</div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setRunning(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
      </div>
    </div>
  );
}