"use client";

import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles

import image1 from "../assets/DSC_1043.JPG";
import image2 from "../assets/DSC_9701.jpg";
import image3 from "../assets/homepage.jpg";
import image4 from "../assets/DSC_1059.jpg";


export default function HeroSection() {
  // Example images
  const images = [image3,image1, image2,image4];

  return (
    <section className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={4000}
          transitionTime={1000}
          stopOnHover={false}
          swipeable={false}
          emulateTouch={false}
        >
          {images.map((src, idx) => (
            <div key={idx} className="h-[120vh] md:h-screen w-full">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Dark overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Pre-Event Hackathon Announcement Button */}
      <div className="absolute top-4 right-4 md:right-10 z-20 text-right my-2">
        <div className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition">
          <Link to="/hackathon" className="block text-black hover:underline">
            ⚡ Pre-Event Hackathon – Apply Now
          </Link>
          <p className="text-xs font-normal mt-1">📅 5 - 7 January 2026</p>
        </div>
      </div>

      {/* Tag */}
      <div className="relative z-10 text-sm bg-indigo-600 px-4 py-1 rounded-full font-semibold my-10 md:my-6 lg:my-4">
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
