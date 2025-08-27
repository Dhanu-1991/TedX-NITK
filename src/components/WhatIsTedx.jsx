import React from "react";

export default function WhatIsTedx() {
  return (
    <section className="w-full pt-24 pb-16 px-4 md:px-12 bg-neutral-900 text-neutral-100 relative">
      
      <div
        className="absolute left-0 top-0 w-full h-24 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #dc2626 0%, #2563eb 100%)",
          opacity: 0.12,
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 flex items-center gap-4">
          <span className="block w-12 h-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            <span className="block text-neutral-100">What is</span>
            <span className="text-red-600 drop-shadow-lg">
              TED<span className="align-super text-2xl">x</span>
            </span>
          </h2>
        </div>
        <blockquote className="mt-8 text-xl md:text-2xl italic text-neutral-300 font-medium border-l-4 border-red-600 pl-6 mb-8">
          “Ideas worth spreading, brought to life by passionate communities.”
        </blockquote>
        <p className="text-lg text-neutral-400 leading-relaxed mb-4">
          TEDx is a global movement of local, self-organized events that bring
          people together to share a TED-like experience. At TEDxNITKSurathkal,
          we blend inspiring TED Talks videos with live speakers, sparking deep
          discussion and connection in our campus community.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-4">
          The TED Conference provides general guidance for the TEDx program, but
          each TEDx event—including ours—is independently organized. Here, “x”
          stands for the spirit of independence and innovation.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed">
          Curious to learn more? Explore the official{" "}
          <a
            href="https://www.ted.com/tedx/program"
            className="underline text-blue-400 hover:text-red-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            TEDx Program Initiative
          </a>
          .
        </p>
      </div>
    </section>
  );
}
