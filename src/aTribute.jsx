import React from "react";

export default function Tribute() {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 relative">
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(168,85,247,0.15), transparent 60%), radial-gradient(circle at bottom right, rgba(139,92,246,0.15), transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="block w-12 h-1.5 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400" />
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Tribute
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              The TEDxNITKSurathkal team takes this moment to grieve the loss of{" "}
              <span className="text-neutral-100 font-medium">Govind Jeevan</span>, 
              a bright student of NITK and one of its most passionate proponents. 
              Our heartfelt condolences go to his family and friends for this irreparable loss.
            </p>

            <p>
              Govind was an active and inspiring member of our core team, 
              leaving a lasting impact across several editions of TEDxNITKSurathkal. 
              He was deeply committed to discovering and spreading ideas worth sharing, 
              and his drive for excellence uplifted everyone around him.
            </p>

            <p>
              His contributions spanned from{" "}
              <span className="text-neutral-100">Speaker Curation</span> and{" "}
              <span className="text-neutral-100">Event Website Management</span> 
              to{" "}
              <span className="text-neutral-100">Creative Design</span> and leading 
              entire editions of TEDxNITKSurathkal. His leadership during the{" "}
              <em>“Mirrors and Windows”</em> edition in 2020 and his mentorship 
              during the pandemic left an indelible mark on our community.
            </p>

            <p>
              Beyond his work, Govind was a thinker and problem-solver — 
              always exploring ways to make events more impactful and meaningful 
              for the NITK community. His spirit of collaboration and innovation 
              continues to inspire us.
            </p>

            <p className="text-neutral-400 italic">
              May his soul rest in peace. His legacy will forever remain with TEDxNITKSurathkal.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-neutral-700 hover:shadow-purple-500/30 transition duration-500">
            <img
              src="/govind_tribute.jpg"
              alt="Govind Jeevan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
