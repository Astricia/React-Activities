"use client";
import { useState } from "react";

export default function Level3() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [qty, setQty] = useState(0);
  const [dark, setDark] = useState(false);
  const [result, setResult] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="space-y-8">


      <div className="card">
        <h2>Simple To-Do</h2>
        <input
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={addTask}>Add</button>
        <ul className="list-disc ml-5">
          {tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>

      
      <div className="card">
        <h2>Add to Cart</h2>
        <button className="btn" onClick={() => setQty(qty + 1)}>+</button>
        <p>Quantity: {qty}</p>
      </div>

   
      <div className={`card ${dark ? "bg-black text-white" : ""}`}>
        <h2>Theme Toggle</h2>
        <button className="btn" onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>
      </div>

      <div className="card">
        <h2>Simple Quiz</h2>
        <p>React is a ___?</p>
        <button className="btn" onClick={() => setResult("Correct")}>
          Library
        </button>
        <button className="btn" onClick={() => setResult("Wrong")}>
          Database
        </button>
        <p>{result}</p>
      </div>

 
      <div className="card">
        <h2>Multiple Counters</h2>
        <div className="flex gap-4">
        <button className="btn " onClick={() => setA(a + 1)}>A: {a}</button>
        <button className="btn" onClick={() => setB(b + 1)}>B: {b}</button>
        <button className="btn" onClick={() => setC(c + 1)}>C: {c}</button>
        </div>
      </div>

    </div>
  );
}