"use client";

import Level1 from "../components/Level1";
import Level2 from "../components/Level2";
import Level3 from "../components/Level3";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-12 text-blue-900">
      <h1 className="text-3xl font-bold text-center">
        React Practice Set
      </h1>

      <Level1 />
      <Level2 />
      <Level3 />
    </div>
  );
}