"use client";
import { useState } from "react";

export default function Level1() {

  
  const [name, setName] = useState("");


  const [count, setCount] = useState(0);

 
  const [show, setShow] = useState(false);


  const [red, setRed] = useState(true);

  
  const [likes, setLikes] = useState(0);

  return (
    <div className="space-y-8">

      
      <div className="card">
        <h2>Name Display</h2>
        <input
          className="input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <p>Hello, {name}</p>
      </div>

   
      <div className="card">
        <h2>Click Counter</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click
        </button>
        <p>{count}</p>
      </div>

      
      <div className="card">
        <h2>Show / Hide</h2>
        <button className="btn" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show && <p>Welcome Participants!</p>}
      </div>

     
      <div className="card">
        <h2>Background Toggle</h2>
        <div className={`h-16 mb-2 ${red ? "bg-red-700" : "bg-yellow-300"}`} />
        <button className="btn" onClick={() => setRed(!red)}>
          Change Color
        </button>
      </div>

      
      <div className="card">
        <h2>Like Button</h2>
        <button className="btn" onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </button>
      </div>

    </div>
  );
}