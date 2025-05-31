import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import TractorImg from "../assets/Tractor-Transparent-Free-PNG 1.png";
import { Navbar } from "@/components/navbar";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { HowItWorksSection } from "@/layouts/howitworks";
import { WhyChooseUsSection } from "@/layouts/whychooseus";
import { TrustedByFarmers } from "@/layouts/trustedbyfarmers";
import { Faq } from "@/layouts/faq";

export const MailIcon = () => {
  return (
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
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <motion.div
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-[#18332F]  lg:flex-col justify-between  rounded-b-[3vw] shadow-2xl"
      >
        <Navbar />
        <div className="mx-auto lg:flex justify-center px-5  py-10 lg:py-0">
          <div className="lg:flex md:flex">
            <div className=" flex justify-center items-center  flex-col mb-12 lg:mb-0 ">
              <div className="">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-5xl font-medium text-white flex flex-col"
                >
                  <span>Empowering Farmers.</span>
                  <span>Feeding Africa.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-[16px] text-white mt-4 font-light"
                >
                  Access tractors, bulk inputs, and farm support, all in one
                  platform.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="flex  md:flex-row flex-col lg:flex-row lg:gap-3 gap-5 mt-10"
                >
                  <div className="w-3/4">
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
                      startContent={<MailIcon  />} // icon color
                    />
                  </div>

                  <div className=" flex items-end">
                    <Button
                      isExternal
                      as={Link}
                      className=" rounded-full text-sm font-medium text-[#18332F] bg-[#F2FF79]"
                      href={siteConfig.links.sponsor}
                    >
                      Find an Agent Near You
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="flex lg:justify-center items-center"
              >
                <Image src={TractorImg} alt="Truck Image" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <HowItWorksSection />
      <WhyChooseUsSection />
      <TrustedByFarmers />
      <Faq />
    </DefaultLayout>
  );
}
