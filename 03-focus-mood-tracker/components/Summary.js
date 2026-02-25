"use client";

export default function Summary({ sessions }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
      <h2 className="text-lg font-semibold">Today's Sessions</h2>

      <p>Total Sessions: {sessions.length}</p>

      {sessions.map((session, index) => (
        <div key={index} className="flex justify-between">
          <span>
            {session.moodBefore} → {session.moodAfter}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(session.date).toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  );
}