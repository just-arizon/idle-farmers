import { useState, useEffect } from "react";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { AnimatePresence, motion } from "framer-motion";
import TractorImg1 from "../assets/Tractor.svg";
import TractorImg2 from "../assets/farmer.svg";
import TractorImg3 from "../assets/fertilisers.png";
import TractorImg4 from "../assets/chemicals.svg";
import TractorImg5 from "../assets/seedlings.png";
import { Navbar } from "@/components/navbar";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { HowItWorksSection } from "@/layouts/howitworks";
import { WhyChooseUsSection } from "@/layouts/whychooseus";
import { TrustedByFarmers } from "@/layouts/trustedbyfarmers";
import { Faq } from "@/layouts/faq";
import { WeAreActive } from "@/layouts/weareactive";
import { PartnersLogos } from "@/layouts/partnerslogos";


export const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 512 512"
  >
    <circle cx="256" cy="192" r="32" fill="#fff" />
    <path
      fill="#fff"
      d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
    />
  </svg>
);

const tractorImages = [TractorImg1, TractorImg2, TractorImg3, TractorImg4, TractorImg5];

export default function IndexPage() {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tractorImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <DefaultLayout>
      <Navbar />

      <motion.div
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-[#18332F] lg:flex-col justify-between rounded-b-[3vw]"
      >
        <div className="mx-auto lg:flex container py-10 lg:py-0 bg-purple- px-5 lg:px-0">
          <div className="w-full lg:flex md:flex  bg-yellow-">
            {/* Left Section */}
            <div className="mb-12 lg:mb-0  lg:w-1/2 flex lg:justify-center items-center bg-slate-">
              <div className="">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-5xl font-medium text-white flex flex-col gap-3"
                >
                  <span>Empowering The</span>
                  <span>Farmers That Feed Africa.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-[16px] text-white mt-4 font-light w-full"
                >
                  Access tractors, bulk inputs, and farm support exclusively.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="flex md:flex-row flex-col lg:flex-row lg:gap-3 gap-5 mt-10 "
                >
                  <div className="w-3/4 ">
                    <Input
                      placeholder="What is your location?"
                      labelPlacement="outside"
                      type="text"
                      variant="underlined"
                      color="default"
                      classNames={{
                        input: "!text-white !placeholder-gray",
                        inputWrapper: "!border-white",
                        innerWrapper: "text-white",
                        label: "!text-white",
                      }}
                      startContent={<MailIcon />}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      isExternal
                      as={Link}
                      className="rounded-full text-sm font-medium text-[#18332F] bg-[#F2FF79]"
                      href={siteConfig.links.sponsor}
                    >
                      Find an Agent Near You
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Section with Animated Image Swapping */}
            <div className="lg:w-1/2 flex justify-end bg-blue-">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5, ease: "easeInOut" }}
                className="flex justify-center items-center relative w-[400px] h-[400px]"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={tractorImages[index]}
                    src={tractorImages[index]}
                    alt="Tractor"
                    className="absolute w-full h-full object-contain"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Sections */}
      <PartnersLogos />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <WeAreActive />
      <TrustedByFarmers />
      <Faq />
    </DefaultLayout>
  );
}
