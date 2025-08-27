import React from "react";

export default function PastSpeakers() {
  const pastSpeakers = [
    {
      name: "Dr. Kantharaju CK",
      image: "/Kanthraju.png", 
      role: "Social Worker",
    },
    {
      name: "Gangadhar Patil",
      image: "/GangadharPatil.png",
      role: "Journalist & Entrepreneur",
    },
    {
      name: "Sapthami Gowda",
      image: "/SapthamiGowda.png",
      role: "Actor",
    },
    {
      name: "Nandini Shankar",
      image: "/NandiniShankar.png",
      role: "Violinist",
    },
    {
      name: "Vishak Nair",
      image: "/vishak.jpeg",
      role: "Actor",
    },
  ];

  return (
    <section className="w-full pt-24 pb-16 px-4 md:px-12 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 relative">
      
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #6366f1 100%)",
          opacity: 0.12,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="mb-12 flex items-center gap-4">
          <span className="block w-12 h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            <span className="block text-neutral-100">Past</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-lg">
              Speakers
            </span>
            <span className="ml-2">🍀</span>
          </h2>
        </div>

        {/* Intro text */}
        <p className="text-lg text-neutral-300 leading-relaxed mb-16 max-w-3xl">
          Over the years, TEDxNITKSurathkal has welcomed incredible voices from diverse fields —
          visionaries, artists, entrepreneurs, and thought leaders who have inspired generations
          with their ideas and stories. Here’s a glimpse of some of our past speakers.
        </p>

        {/* Speaker cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {pastSpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-800/40 border border-neutral-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 hover:border-purple-400/60 transition duration-300"
            >
              {/* Speaker Image */}
              <div className="overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{speaker.name}</h3>
                <p className="text-sm text-neutral-400">{speaker.role}</p>
              </div>

              {/* Hover accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
