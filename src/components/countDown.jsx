// src/components/CountdownHero.jsx
import React, { useEffect, useState } from "react";
export default function Countdown({
  targetDate = "2025-02-15T18:00:00",
  background,
}) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <section
      aria-label="Event countdown"
      className="relative overflow-hidden"
      style={{
        backgroundImage: background
          ? `linear-gradient(rgba(8,8,8,0.65), rgba(8,8,8,0.65)), url(${background})`
          : "radial-gradient(circle at top, #1e1e1e, #0d0d0d)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase opacity-90">
            Countdown to the Big Event
          </h3>
          <p className="text-neutral-300 mt-2 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            A little countdown to keep the excitement alive — grab your seat!
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
  
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                className="bg-black/70 border border-black/50 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center shadow-xl transition hover:scale-105"
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-md mb-2 sm:mb-3 relative"
                  style={{
                    background: "rgba(18,18,18,0.95)",
                    boxShadow:
                      "inset 0 0 0 2px rgba(0,0,0,0.25), 0 0 12px rgba(255,215,0,0.25)",
                  }}
                >
                  
                  <span className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-yellow-400 animate-pulse drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                    {padNumber(value)}
                  </span>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-neutral-300 uppercase tracking-wide">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function getTimeLeft(target) {
  const now = new Date();
  const tgt = typeof target === "string" ? new Date(target) : target;
  let diff = Math.max(0, tgt.getTime() - now.getTime()); 
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}
function padNumber(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return "00";
  return String(n).padStart(2, "0");
}
