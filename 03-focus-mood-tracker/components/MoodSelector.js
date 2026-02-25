"use client";

export default function MoodSelector({ title, selected, setSelected }) {
  const moods = ["😄", "😐", "😴", "😢", "😡"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-semibold text-center">{title}</h2>

      <div className="flex justify-center gap-4">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelected(mood)}
            className={`text-3xl ${
              selected === mood
                ? "scale-125"
                : "opacity-50"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}