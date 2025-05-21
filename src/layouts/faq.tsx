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
    title: "General",
    faqs: [
      {
        question: "What is Idle Farmer?",
        answer:
          "Idle Farmer is a play-to-earn farming simulation game where you can grow crops, harvest produce, and earn rewards, all while being idle.",
      },
      {
        question: "Who can use Idlefarmer?",
        answer:
          "Idlefarmer is open to smallholder farmers, farming groups, input suppliers, tractor owners, local agents, cooperatives, governments and development partners.",
      },
      {
        question: "Is Idlefarmer available across Nigeria?",
        answer:
          "Yes, Idlefarmer currently operates in multiple states across Nigeria and is expanding rapidly. You can check service availability by contacting support or using the “Find an Agent” tool.",
      },
      {
        question: "How much does it cost to use Idlefarmer?",
        answer:
          "The platform itself is free for farmers to access. However, charges may apply for services like tractor use, input purchase, or delivery depending on your location and needs.",
      },
    ],
  },
  {
    title: "For Farmers",
    faqs: [
      {
        question: "How do I join Idlefarmer as a farmer? ",
        answer:
          "You can enrol through a local Idlefarmer agent, through our website, or by calling our toll-free line. Our agents will help profile you and onboard your farm. ",
      },
      {
        question: "What services can I access as a farmer? ",
        answer:
          "Farmers receive access to inputs, tractor services, market information, and training.",
      },
      {
        question: "Can I place orders for inputs on my own?  ",
        answer:
          "No, it is more cost-effective to order through an agent who can help aggregate orders and effect reduced prices.",
      },
      {
        question: "What if I don’t have access to a smartphone?",
        answer:
          "No problem. Our hyperlocal agents serve as your digital bridge, helping you access services even if you don’t have a smartphone or internet access.",
      },
      {
        question: "How are prices set for inputs and tractors? ",
        answer:
          "Prices are negotiated with suppliers and tractor owners to ensure fairness, quality, and cost-effectiveness. You will receive pricing details before confirming any request.",
      },
    ],
  },
  {
    title: "For Agents",
    faqs: [
      {
        question: "Who can become an Idlefarmer agent? ",
        answer:
          "Anyone with a passion for agriculture and community support—extension workers, agro-dealers, graduates, or rural mobilizers as an independent entrepreneur.",
      },
      {
        question: "How do I apply to become an agent?",
        answer:
          "Visit our “Become an Agent” page to apply online, or talk to a regional Idlefarmer coordinator. ",
      },
    ],
  },
  {
    title: "For Tractor Owners",
    faqs: [
      {
        question: "How do I register my tractor on Idlefarmer?  ",
        answer:
          "Tractor owners can register via a verified Idlefarmer admin or regional coordinator. You’ll provide your tractor details, location, and availability.",
      },
      {
        question: "What kind of tractors are accepted?",
        answer:
          "All operational tractors with key implements (e.g., ploughs, harrows) are accepted. Additional machinery like planters or sprayers are also welcome. ",
      },
      {
        question: "How do I get paid for services rendered?",
        answer:
          "Tractor owners are paid per job based on agreed rates. Idlefarmer handles logistics and coordinates with farmers and agents for booking.",
      },
    ],
  },
  {
    title: "For Partnerships",
    faqs: [
      {
        question: "Can NGOs and government agencies partner with Idlefarmer? ",
        answer:
          "Yes. We collaborate with partners on agricultural programs, financing initiatives, climate-smart agriculture, and farmer support. ",
      },
      {
        question: "How does Idlefarmer support data-driven development?",
        answer:
          "We collect real-time data on farmer needs, yields, and service gaps to power insights for partners. This helps with targeting, monitoring, and impact evaluation.  ",
      },
      {
        question: "How can I start a partnership?",
        answer:
          "Visit our “Partner With Us” page or email: partnerships@idlefarmer.africa. ",
      },
    ],
  },
  {
    title: "Support & Technical Issues",
    faqs: [
      {
        question: "Do you have a mobile app?",
        answer:
          "For now, services are accessed via agents and our web app. ",
      },
      {
        question: "Can I give feedback about the platform?",
        answer:
          "Yes! After every service, you can rate your experience. You can also leave suggestions via the “Feedback” section or through your local agent. ",
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
      className="px-4 pb-16 flex flex-col items-center bg-white"
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
            <Accordion type="multiple" className="w-full">
              {section.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${secIndex}-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
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
