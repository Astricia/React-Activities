import MoodCard from "./MoodCard";

export default function MoodList({ moods }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {moods.map((item, index) => (
        <MoodCard
          key={index}
          date={item.date}
          mood={item.mood}
          description={item.description}
        />
      ))}
    </div>
  );
}