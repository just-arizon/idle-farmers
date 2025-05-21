import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTractor, FaCoins, FaChartBar, FaHandsHelping } from "react-icons/fa";

interface ReasonItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
}

const reasons: ReasonItem[] = [
  {
    title: "Cost Savings",
    description: "Up to 30% savings via input demand aggregation",
    icon: <FaCoins className="text-yellow-400 w-10 h-10" />,
    bg: "bg-[#18332F] text-white",
  },
  {
    title: "Access Mechanization",
    description: "Timely, easy-to-book and share tractors",
    icon: <FaTractor className="text-green-700 w-10 h-10" />,
    bg: "bg-[#f9f9f9]",
  },
  {
    title: "Data-driven Insights",
    description:
      "Make smarter farm and decisions with real-time agroeconomic insights for farmers",
    icon: <FaChartBar className="text-white w-10 h-10" />,
    bg: "bg-[#18332F] text-white",
  },
  {
    title: "Hyper Local Support",
    description:
      "Local trusted hyperlocal agents always available to support and bridge the gap between our technology and the farmers we target.",
    icon: <FaHandsHelping className="text-red-400 w-10 h-10" />,
    bg: "bg-[#f9f9f9]",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="pb-16 px-4">
      <div className="text-center mb-10">
        <span className="px-4 py-1 bg-[#f9f9f9] border border-black text-[#0E0E0E] text-sm font-medium rounded-full">
          Why choose Idefarmer?
        </span>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6" ref={ref}>
        {reasons.map((item, index) => {
          const cardRef = useRef<HTMLDivElement>(null);
          const inView = useInView(cardRef, { once: true });

          return (
            <motion.div
              ref={cardRef}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex justify-between items-center p-6 rounded-xl ${item.bg}`}
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <div>{item.icon}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
