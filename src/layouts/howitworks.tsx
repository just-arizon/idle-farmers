import {
  WrenchScrewdriverIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  ChartBarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StepItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    title: "Request Mechanization Services",
    description: "Agents schedule tractors and manage logistics.",
    icon: <WrenchScrewdriverIcon className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Bulk Input Ordering",
    description:
      "Order quality seeds and fertilizers collectively and save more.",
    icon: <DocumentDuplicateIcon className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Real-Time Support",
    description:
      "Get seasonal, on-demand assistance from trusted hyper-local agents.",
    icon: <ClockIcon className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Track farm performance, get tailored tips, and optimize productivity.",
    icon: <ChartBarIcon className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Financial Inclusion",
    description:
      "Access microloans, insurance, and savings with data-backed creditworthiness.",
    icon: <BanknotesIcon className="w-8 h-8 text-green-600" />,
  },
];

export const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      className="py-12 bg-white"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-8">
        <span className="px-4 py-1 bg-[#f9f9f9] border border-black text-[#0E0E0E] text-sm font-medium rounded-full">
          How it works
        </span>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-5xl rounded-2xl p-6">
        {steps.map((step, index) => {
          const stepRef = useRef(null);
          const stepInView = useInView(stepRef, { once: true });

          return (
            <motion.div
              ref={stepRef}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={stepInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-[#F9F9F9] p-4 rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              <div>{step.icon}</div>

            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
