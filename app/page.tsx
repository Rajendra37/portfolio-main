import React from "react";
import type { Metadata } from "next";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio page",
};

export default function Home() {
  return (
    <>
      <main className="px-4 bg-[#060010]">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center ">
          <Landing />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <h2 className="text-2xl font-semibold">About Me</h2>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <Skills />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <h2 className="text-2xl font-semibold">Contact Me</h2>
        </section>
      </main>
    </>
  );
}
