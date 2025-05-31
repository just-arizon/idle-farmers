import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const testimonials = [
  {
    name: "Stephen Mitchell",
    role: "CEO, Green Fields Co-op",
    text: "Idlefarmer has revolutionized our farming operations...",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sarah Johnson",
    role: "Farmer, Sunrise Farms",
    text: "Thanks to Idlefarmer, I’ve been able to access quality inputs at a fair price.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "John Doe",
    role: "Agritech Specialist",
    text: "A brilliant platform that empowers local farmers in ways we've never seen before.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=60",
  },
];

export const TrustedByFarmers: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        pagination: false,
        arrows: false,
        perPage: 3,
        gap: "1rem",
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
        extensions: { AutoScroll },
      });

      splide.mount({ AutoScroll });
    }
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-8">
        <span className="px-4 py-1 bg-[#f9f9f9] border border-black text-[#0E0E0E] text-sm font-medium rounded-full">
          Trusted by farmers across Nigeria
        </span>

        <div className="flex flex-col gap-3 my-8 items-center">
          <h3 className="text-2xl font-bold max-w-lg">
            Join a growing ecosystem of farmers transforming their practices.
          </h3>
          <p>
            Experience increased yields, reduced costs, and a supportive
            network.
          </p>
        </div>
      </div>

      <div ref={splideRef} className="splide max-w-6xl mx-auto px-4">
        <div className="splide__track">
          <ul className="splide__list">
            {testimonials.map((t, i) => (
              <li key={i} className="splide__slide">
                <div
                  className="text-white p-6 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #18332F 0%, #009680 100%)",
                  }}
                >
                  <div className="mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm">{t.text}</p>
                  <div className="mt-6">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-green-100">{t.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
