"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import MoodList from "../components/MoodList";

export default function Home() {

  const [moods] = useState([
    { date: "2026-02-20", mood: "😄", description: "Feeling happy today!" },
    { date: "2026-02-19", mood: "😴", description: "Very tired after work." },
    { date: "2026-02-18", mood: "😎", description: "Chilled and relaxed." }
  ]);

  return (
    
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-blue-100">

    <Header />

    <main className="flex-grow">
      <Section>
        <MoodList moods={moods} />
      </Section>
    </main>

    <Footer />

  </div>
);
  
}