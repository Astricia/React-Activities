"use client";

export default function RobotDisplay({ role, power }) {

  const isCritical = power < 20;

  let bgColor = "";
  let icon = "";

  if (isCritical) {
    bgColor = "bg-yellow-400 text-black";
    icon = "⚠️";
  } else {
    switch (role) {
      case "Medic":
        bgColor = "bg-green-500 text-white";
        icon = "💊";
        break;
      case "Warrior":
        bgColor = "bg-red-600 text-white";
        icon = "⚔️";
        break;
      case "Artist":
        bgColor = "bg-purple-600 text-white";
        icon = "🎨";
        break;
      default:
        bgColor = "bg-gray-300";
    }
  }

  return (
    <div className={`w-80 p-8 rounded-2xl shadow-xl text-center ${bgColor}`}>
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">Role: {role}</h2>
      <p className="text-lg mb-2">Power: {power}%</p>

      {isCritical && (
        <p className="font-bold text-xl animate-pulse">
          CRITICAL POWER
        </p>
      )}
    </div>
  );
}