import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Organized FAQ data by category
const faqSections = [
  {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is Idle Farmer?",
        answer:
          "Idlefarmer is a Nigerian agricultural technology company that empowers & connects smallholder farmers with tractors, inputs, advisory services, and finance to increase productivity and profitability. ",
      },
      {
        question: "Who can use Idlefarmer?",
        answer:
          "Farmers, farming groups, input suppliers, tractor owners, cooperatives, local agents, government bodies, financial institutions and development partners.",
      },
      {
        question: " Is it available nationwide? ",
        answer:
          "Yes, Idlefarmer operates in multiple Nigerian states and is expanding. Use the “Find an Agent”tool or contact support for specific locations. ",
      },
      {
        question: "How much does it cost ?",
        answer:
          "Access to the platform is free. Service charges apply for tractors, inputs, and deliveries based on needs and location. ",
      },
      {
        question: " How do I join Idlefarmer?",
        answer:
          "Farmers can enroll through our agent, Input suppliers and tractor owners are also onboarded through our agents. You can start by searching for the nearest agent to you and send a contact me request or make a toll-free call. Our agents will support you every step of the way. ",
      },
      {
        question: " What services are available? ",
        answer:
          "Tractor bookings & sharing, Bulk & collective input orders, Advisory & seasonal planning, (Soon) Microloans & insurance  ",
      },
    ],
  },
 

];

export const Faq: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="px-4 py-12 flex flex-col items-center bg-white"
    >
      <div className="w-full max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 bg-gray-100 border border-black text-black text-sm font-medium rounded-full">
            FAQ
          </span>
        </motion.div>

        {/* Render each section */}
        {faqSections.map((section, secIndex) => (
          <div key={secIndex} className="mb-10">
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
            <Accordion type="multiple" className="w-full  ">
              {section.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${secIndex}-${index}`}>
                  <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};
