import { Mic, Users, Megaphone, Map } from "lucide-react";

export default function TheExperience() {
  const features = [
    {
      icon: <Mic className="w-10 h-10 text-pink-500" />,
      title: "Impactful Ideas",
      desc: "We strive to bring forward powerful ideas that challenge the norms and carry the potential to transform lives.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-500" />,
      title: "Community Strength",
      desc: "Standing 6000+ strong, our community comprises curious individuals with an ever-increasing appetite for learning.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-yellow-400" />,
      title: "Legacy",
      desc: "Ranking amongst the top educational institutes in India, our university adds a key ingredient in realizing our vision.",
    },
    {
      icon: <Map className="w-10 h-10 text-cyan-400" />,
      title: "Location",
      desc: "Hugging the Arabian Sea along its length, our venue is a welcoming retreat for sparking up conversations about things that matter.",
    },
  ];

  return (
    <section className="w-full pt-24 pb-16 px-4 md:px-12 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 relative">
      
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #22c55e 0%, #eab308 50%, #06b6d4 100%)",
          opacity: 0.15,
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="block w-12 h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-cyan-400" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            <span className="block text-neutral-100">The</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-cyan-400 drop-shadow-lg">
              Experience
            </span>
          </h2>
        </div>

        <p className="text-lg text-neutral-300 leading-relaxed mb-16 max-w-3xl">
          Fostered by the vision of serving the student community with the most
          innovative and inspiring ideas, TEDxNITKSurathkal has been a hub of
          creativity since 2011. With over a decade of impactful editions, our
          platform pushes beyond conventions and redefines what’s possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 rounded-2xl bg-neutral-800/40 border border-neutral-700 hover:border-cyan-400/60 transition duration-300 shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
