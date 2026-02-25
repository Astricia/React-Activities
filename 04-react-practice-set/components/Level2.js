"use client";
import { useState } from "react";

export default function Level2() {

  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">

     
      <div className="card">
        <h2>Character Counter</h2>
        <textarea
          className="input"
          onChange={(e) => setText(e.target.value)}
        />
        <p>Characters: {text.length}</p>
      </div>


      <div className="card">
        <h2>Age Checker</h2>
        <input
          type="number"
          className="input"
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{age >= 18 ? "Adult" : age ? "Minor" : ""}</p>
      </div>

      
      <div className="card">
        <h2>Password Toggle</h2>
        <input type={showPass ? "text" : "password"} className="input" />
        <button className="btn" onClick={() => setShowPass(!showPass)}>
          {showPass ? "Hide" : "Show"}
        </button>
      </div>

     
      <div className="card">
        <h2>ON / OFF Switch</h2>
        <button className="btn" onClick={() => setOn(!on)}>
          {on ? "ON" : "OFF"}
        </button>
      </div>

      
      <div className="card">
        <h2>Reset Counter</h2>
        <div className="flex gap-4">
        <button className="btn" onClick={() => setCount(count + 1)}>+</button>
        <button className="btn" onClick={() => setCount(count - 1)}>-</button>
        <button className="btn" onClick={() => setCount(0)}>Reset</button>
        </div>
        <p>{count}</p>
      </div>

    </div>
  );
}