import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


import Coins from "../assets/icons/coins.png"
import Tractor  from "../assets/icons/tractor.png"
import Support  from "../assets/icons/support.svg"
import Graph  from "../assets/icons/graph.png"

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
    icon: <img src={Coins} alt="Coins icon" className="lg:w-10 w-12" />,
    bg: "bg-[#18332F] text-white",
  },
  {
    title: "Access Mechanization",
    description: "Timely, easy-to-book and share tractors",
    icon: <img src={Tractor} alt="Tractor icon" className="lg:w-10 w-12" />,
    bg: "bg-[#f9f9f9]",
  },
  {
    title: "Data-driven Insights",
    description:
      "Make smarter farm and decisions with real-time agroeconomic insights for farmers",
    icon: <img src={Graph} alt="Graph icon" className="lg:w-10 w-12" />,
    bg: "bg-[#18332F] text-white",
  },
  {
    title: "Hyper Local Support",
    description:
      "Local trusted hyperlocal agents always available to support and bridge the gap between our technology and the farmers we target.",
    icon: <img src={Support} alt="Support icon" className="lg:w-10 w-12 " />,
    bg: "bg-[#f9f9f9]",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="pb-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="px-4 py-1 bg-[#f9f9f9] border border-black text-[#0E0E0E] text-sm font-medium rounded-full">
          Why choose Idefarmer?
        </span>
      </motion.div>

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
              className={`flex justify-between gap-4 items-center p-6 rounded-xl ${item.bg}`}
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm w-52 lg:w-72">{item.description}</p>
              </div>
              <div>{item.icon}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
