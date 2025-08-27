// src/components/FooterFixed.jsx
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const galleryImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];

  const fullBleedStyle = {
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    width: "100vw",
  };

  return (
    <footer aria-label="Site footer" className="w-full text-neutral-200">
      
      <div style={fullBleedStyle} className="bg-[#080808]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* logo + text */}
            <div className="space-y-4 flex flex-col items-start">
              <div className="w-36 sm:w-48">
                <img
                  src="/tedx-nitk.png"
                  alt="TEDx NITK Surathkal"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Fostered by the vision of serving the student community with the
                most innovative and inspiring ideas.
              </p>
            </div>

            {/* social */}
            <div className="flex flex-col items-start sm:items-center lg:items-start space-y-4">
              <div className="h-1 w-10 bg-rose-600 mb-2" />
              <h3 className="text-base sm:text-lg font-bold">
                SPREAD THE LOVE
              </h3>
              <p className="text-neutral-400 text-sm max-w-sm">
                We're on your favourite social media networks! Follow us on:
              </p>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-600 flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-black transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-600 flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-black transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* gallery */}
            <div>
              <div className="h-1 w-10 bg-rose-600 mb-2" />
              <h3 className="text-base sm:text-lg font-bold mb-3">GALLERY</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className="w-full aspect-square bg-neutral-900 overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`gallery-${i + 1}`}
                      className="w-full h-full object-cover transform hover:scale-105 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div
        style={fullBleedStyle}
        className="bg-black border-t border-neutral-800"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-neutral-400">
          <div className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} All Rights Reserved | Made
            With <span aria-hidden>♥</span> By TEDxNITKSurathkal &amp; Colorlib
            | This Independent TEDx Event Is Operated Under License From TED.
          </div>

          <div className="mt-3 md:mt-0">
            <button
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className="text-neutral-300 hover:text-white font-medium"
            >
              Back To Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
