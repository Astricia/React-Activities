"use client";

import { useState, useEffect } from "react";
import Timer from "../components/Timer";
import MoodSelector from "../components/MoodSelector";
import Summary from "../components/Summary";

export default function Home() {

  const [moodBefore, setMoodBefore] = useState(null);
  const [moodAfter, setMoodAfter] = useState(null);
  const [sessions, setSessions] = useState([]);


  useEffect(() => {
    const saved = localStorage.getItem("sessions");
    if (saved) {
      setSessions(JSON.parse(saved));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  const handleComplete = () => {
    if (!moodBefore || !moodAfter) {
      alert("Select moods before and after session.");
      return;
    }

    const newSession = {
      date: new Date().toISOString(),
      moodBefore,
      moodAfter,
    };

    setSessions([newSession, ...sessions]);
    setMoodBefore(null);
    setMoodAfter(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-8 space-y-8 text-blue-900">

      <h1 className="text-3xl font-bold text-center">
        Focus + Mood Tracker
      </h1>

      <MoodSelector
        title="Mood Before Session"
        selected={moodBefore}
        setSelected={setMoodBefore}
      />

      <Timer onComplete={handleComplete} />

      <MoodSelector
        title="Mood After Session"
        selected={moodAfter}
        setSelected={setMoodAfter}
      />

      <Summary sessions={sessions} />

    </div>
  );
}