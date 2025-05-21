import { Link } from "@heroui/link";


import { siteConfig } from "@/config/site";

import { DefaultLayout } from "@/layouts/default";
import { motion } from "framer-motion";
import TractorImg from "../assets/Tractor-Transparent-Free-PNG 1.png";
import { Navbar } from "@/components/navbar";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

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
        <div className="container mx-auto lg:flex justify-center">
          <div className="lg:flex  gap-">
            <div className=" flex justify-center items-center  flex-col ">
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
                  className="flex flex-wrap gap-2 mt-10"
                >
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

                  <div className="">
                    <Input label="What is your location?" type="text" variant="underlined"
                    
                    className="w-[200px] h-[50px] text-white p-0"
                    />
                  </div>

                </motion.div>
              </div>
            </div>
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <Image src={TractorImg} alt="Truck Image" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </DefaultLayout>
  );
}
