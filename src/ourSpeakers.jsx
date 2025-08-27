import React from "react";

export default function OurSpeakers() {
  const speakers = [
    {
      name: "Coming Soon",
      role: "Stay Tuned",
      image:
        "//futurelinks.com/speaker1",
      bio: "Our speakers bring a wealth of experience and inspiration. Keep watching this space for the official announcement.",
    },
    {
      name: "Coming Soon",
      role: "Stay Tuned",
      image:
        "//futurelinks.com/speaker2",
      bio: "TEDxNITKSurathkal has always hosted visionaries across domains. Stay tuned for our next lineup.",
    },
    {
      name: "Coming Soon",
      role: "Stay Tuned",
      image:
        "//futurelinks.com/speaker3",
      bio: "With diverse backgrounds and groundbreaking ideas, our speakers redefine perspectives and spark change.",
    },
  ];

  return (
    <section className="w-full pt-24 pb-16 px-4 md:px-12 bg-neutral-900 text-neutral-100 relative">
      
      <div
        className="absolute left-0 top-0 w-full h-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #facc15 0%, #ef4444 100%)",
          opacity: 0.15,
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-12 flex items-center gap-4">
          <span className="block w-12 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            <span className="block text-neutral-100">Our</span>
            <span className="text-yellow-400 drop-shadow-lg">Speakers</span>
          </h2>
        </div>

        {/* Intro Text */}
        <p className="text-lg text-neutral-400 leading-relaxed mb-16 max-w-3xl">
          Over the years, TEDxNITKSurathkal has hosted remarkable individuals
          from diverse backgrounds—visionaries, entrepreneurs, artists, and
          change-makers—who have shared stories that continue to inspire and
          challenge perspectives. This year is no different. We are curating a
          lineup of speakers whose ideas are set to ignite conversations and
          create ripples of impact. Stay tuned to meet them!
        </p>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 border border-neutral-700 shadow-lg hover:shadow-yellow-400/20 transition duration-300"
            >
              {/* Speaker Image */}
              <div className="overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Speaker Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-yellow-400 font-medium mb-3">{speaker.role}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/60 rounded-2xl transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
