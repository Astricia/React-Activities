export default function MoodCard({ date, mood, description }) {
  const bgColor = getMoodColor(mood);

  return (
    <div className={`${bgColor} p-6 rounded-2xl shadow-lg w-64 text-center`}>
      <div className="text-5xl mb-3">{mood}</div>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="mt-2 font-medium">{description}</p>
    </div>
  );
}

function getMoodColor(mood) {
  switch (mood) {
    case "😄":
      return "bg-blue-200";
    case "😴":
      return "bg-blue-300";
    case "😎":
      return "bg-blue-200";
    case "😢":
      return "bg-red-200";
    default:
      return "bg-white";
  }
}