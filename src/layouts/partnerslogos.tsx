import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { motion, useInView } from "framer-motion";

import Company1 from "../assets/company1.svg";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.jpg";
import Company5 from "../assets/company5.jpg";


const partnerLogos = [
  {
    name: "Partner 1",
    logo: Company1,
  },
  {
    name: "Partner 2",
    logo: Company2,
  },
  {
    name: "Partner 3",
    logo: Company3,
  },
  {
    name: "Partner 4",
    logo: Company4,
  },
  {
    name: "Partner 5",
    logo: Company5,
  },
];

export const PartnersLogos: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);
   const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        pagination: false,
        arrows: false,
        gap: "2rem",
        perPage: 4,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
        extensions: { AutoScroll },
      });

      splide.mount({ AutoScroll });
    }
  }, []);

  return (
    <motion.div 
      ref={sectionRef}
     initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    className="py-12 bg-white">
      <div className="text-center mb-8">
        <span className="px-4 py-1 bg-[#f9f9f9] border border-black text-[#0E0E0E] text-sm font-medium rounded-full">
          Our Trusted Partners
        </span>

        <div className="flex flex-col gap-3 my-8 items-center">
          <h3 className="text-2xl font-bold max-w-lg">
            Backed by leading brands supporting agriculture.
          </h3>
          <p>We collaborate with industry leaders to deliver better outcomes.</p>
        </div>
      </div>

      <div ref={splideRef} className="splide max-w-6xl mx-auto px-4">
        <div className="splide__track">
          <ul className="splide__list">
            {partnerLogos.map((partner, i) => (
              <li key={i} className="splide__slide">
                <div className="flex justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md h-[120px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
