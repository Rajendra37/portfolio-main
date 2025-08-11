"use client";
import React from "react";
import LightRays from "@/LightRays/LightRays";
import TextType from "@/TextType/TextType";

const Landing = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <TextType
          text={[
            "Hi, I'm Rajendra Gaikwad - Frontend Developer specializing in React.js",
            "Creating Engaging User Experiences",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-3xl md:text-4xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
        />
        <p className="mt-4 text-lg md:text-xl text-cyan-100 text-center max-w-2xl">
          I build fast, accessible, and visually stunning web applications using modern technologies.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button
            className="px-6 py-2 bg-cyan-500 text-white rounded shadow hover:bg-cyan-600 transition"
            aria-label="View Projects"
          >
            View Projects
          </button>
          <button
            className="px-6 py-2 bg-white text-cyan-600 rounded shadow hover:bg-cyan-100 transition"
            aria-label="Contact Me"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;