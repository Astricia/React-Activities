"use client";

import { useState, useEffect } from "react";

export default function Home() {

  /* ================= Activity 1 ================= */
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  /* ================= Activity 2 ================= */
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  /* ================= Activity 3 ================= */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  /* ================= Activity 4 ================= */
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer cleaned up");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8 space-y-10">
      
      <h1 className="text-4xl font-bold text-center text-gray-800">
        useEffect Practice Activities
      </h1>

      {/* Activity 1 */}
      <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          Activity 1 – Log on Mount
        </h2>
        <p className="text-gray-700">
          Open the browser console and refresh the page.
        </p>
      </div>

      {/* Activity 2 */}
      <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-green-600">
          Activity 2 – Update Document Title
        </h2>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Increase
        </button>

        <p className="mt-3 text-gray-800">Count: {count}</p>
      </div>

      {/* Activity 3 */}
      <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          Activity 3 – Fetch Data
        </h2>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <ul className="list-disc ml-6 space-y-1 text-gray-800">
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Activity 4 */}
      <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-600">
          Activity 4 – Timer with Cleanup
        </h2>
        <p className="text-gray-800 text-lg">Seconds: {seconds}</p>
      </div>

    </div>
  );
}