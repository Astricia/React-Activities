"use client";

import { useState } from "react";
import RobotDisplay from "../components/RobotDisplay";

export default function Home() {

  const [role, setRole] = useState("Medic");
  const [power, setPower] = useState(50);

  const charge = () => {
    setPower((prev) => Math.min(prev + 10, 100));
  };

  const drain = () => {
    setPower((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-300 flex flex-col items-center justify-center p-6 space-y-8">

      <h1 className="text-3xl font-bold text-red-600">
        AI Identity Generator 
      </h1>

      
      <div className="flex gap-4">
        <button
          onClick={() => setRole("Medic")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Medic
        </button>

        <button
          onClick={() => setRole("Warrior")}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Warrior
        </button>

        <button
          onClick={() => setRole("Artist")}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Artist
        </button>
      </div>

      
      <div className="flex gap-4">
        <button
          onClick={charge}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Charge 
        </button>

        <button
          onClick={drain}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          Drain 
        </button>
      </div>

    
      <RobotDisplay role={role} power={power} />

    </div>
  );
}