"use client";

import { Link } from "react-router-dom";
import Particle from "./sub-components/Particle/Particle";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-section-bg text-white flex flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Background Particles */}
      {/* <Particle /> */}

      {/* 🔔 Pre-Event Hackathon Announcement Button */}
      <div className="absolute top-4 right-10 z-20 text-right">
        <div className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition">
          <Link to="/hackathon" className="block text-black hover:underline">
            ⚡ Pre-Event Hackathon – Apply Now
          </Link>
          <p className="text-xs font-normal mt-1">📅 5 - 6 January 2026</p>
        </div>
      </div>

      {/* Tag */}
      <div className="relative z-10 text-sm bg-indigo-600 px-4 py-1 rounded-full font-semibold mb-4">
        1st EDITION
      </div>

      {/* Title */}
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight">
        Winter School on AI-Infused Software Engineering
        <br />
        <span className="text-yellow-400">Research and Practice</span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-4 text-black font-bold bg-white/50 px-4 py-2 rounded-full flex items-center gap-2 tracking-wide text-2xl">
        AISE 2026
      </p>

      {/* Info Badges */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium">
        <span className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2">
          📅 7–10 January
        </span>
        <span className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2">
          📍 Dhirubhai Ambani University, Gandhinagar
        </span>
        <span className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2">
          🧑‍🤝‍🧑 In-Person Event
        </span>
      </div>

      {/* Feature Tags */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3 text-xs font-medium">
        {[
          "AI-Powered Learning",
          "Expert Speakers",
          "Hands-on Sessions",
          "Grants",
        ].map((item) => (
          <span
            key={item}
            className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
          >
            {item}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#Registration"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold shadow hover:scale-105 transition"
        >
          🚀 Register Now
        </a>
      </div>
    </section>
  );
}
