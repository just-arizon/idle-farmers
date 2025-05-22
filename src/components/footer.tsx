import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import LaptopImg from "../assets/desktop.png";
import partnerBanner from "../assets/partner-banner.png";
import { Button } from "@heroui/button";



const FooterSection: React.FC = () => {
  return (
    <footer className="lg:px-20 px-5 bg-[#0B342A] text-white  rounded-t-[3vw]">
      {/* Top CTA Blocks */}
      <div className="grid lg:grid-rows-1 md:grid-cols-1 gap-4  py-12 max-w-7xl mx-auto">
        {/* Left CTA */}
        <div className=" rounded-xl p-6 flex flex-col md:flex-row items-center justify-between lg:gap-4 gap-10">
          <div className="text-center md:text-left grid gap-3">
            <h2 className="text-2xl font-semibold mb-2">
              Get started with Idle Farmer
            </h2>
            <p className="text-sm mb-4">
              Manage your farm, connect with agents, place orders, and access
              insights.
            </p>
            <div>
              <Button className="bg-[#F2FF79] text-black px-4 py-2 rounded-full font-semibold">
                Become an Agent
              </Button>
            </div>
          </div>
          {/* Placeholder for Device Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex lg:justify-center items-center"
          >
            <Image src={LaptopImg} alt="Truck Image" />
          </motion.div>
        </div>

        {/* Right CTA */}

        <div
          className="relative w-full h-full bg-cover bg-center rounded-3xl min-h-[240px] flex items-center justify-center px-6"
          style={{ backgroundImage: `url(${partnerBanner})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white flex flex-col lg:gap-3">
            <h2 className="lg:text-3xl text-2xl font-semibold mb-2">Partner With Us</h2>
            <p className="text-sm mb-4 max-w-md">
              Are you an NGO, agribusiness or government agency? Let’s
              collaborate to uplift the farming communities sustainably.
            </p>
            <div className="">
                <Button className="bg-[#F2FF79] text-black px-4 py-2 rounded-full font-semibold">
                  Become a Partner
                </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="flex lg:justify-center ">
        {/* Footer Main Grid */}
        <div className="border-t border-gray-700 py-10    md:grid-cols-2 grid-cols-1 grid lg:grid-cols-4 lg:gap-12 gap-12 text-sm w-full">
          {/* Contact Info */}
          <div className="grid gap-2">
            <h3 className="font-bold mb-3 ">Head Office</h3>
            <p>Idlefarmer Farms, Ososa, Ogun State</p>
            <p>Email: info@idlefarmer.ng</p>
            <p>Phone: +234 903 000 0001</p>
            <p>WhatsApp: +234 903 000 0003</p>
          </div>

          {/* Footer Links: About */}
          <div className="grid gap-2 lg:justify-center">
            <h3 className="font-bold mb-3">About Us</h3>
            <ul className="space-y-2">
              <li>Company Profile</li>
              <li>Our Team</li>
              <li>Case Studies</li>
              <li>Success Stories</li>
            </ul>
          </div>

          {/* Footer Links: For Farmers */}
          <div className="grid gap-2 lg:justify-center">
            <h3 className="font-bold mb-3">For Farmers</h3>
            <ul className="space-y-2">
              <li>How It Works</li>
              <li>Get Started</li>
              <li>Use Our App</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Footer Links: For Agents */}
          <div className="grid gap-2 lg:justify-center">
            <h3 className="font-bold mb-3">For Agents</h3>
            <ul className="space-y-2">
              <li>Become an Agent</li>
              <li>Join our Network</li>
              <li>Agent Rewards</li>
              <li>Agent Portal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="border-t border-gray-700 py-8  max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <form className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 rounded-md bg-[#153A2D] border border-gray-600 text-white 
             focus:border-[#F2FF79] focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-[#153A2D] border border-gray-600 text-white 
             focus:border-[#F2FF79] focus:outline-none focus:ring-0"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="px-4 py-2 rounded-md bg-[#153A2D] border border-gray-600 text-white 
             focus:border-[#F2FF79] focus:outline-none focus:ring-0"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F2FF79] text-black font-semibold px-4 py-2 rounded-full self-start"
          >
            Leave us a Message
          </button>
        </form>

        {/* Social & Branding */}
        <div className="flex flex-col justify-between">
          <div className="flex lg:justify-end gap-4 text-xl text-white mb-4">
            <div className="flex gap-5">
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex lg:justify-end gap-4 ">
            <div className="">
              <h1 className=" text-xl font-bold text-white">
              <span className="text-xl self-center ">IdleFarmer</span>
              <span className="text-[#F2FF79] text-3xl font-extrabold">.</span>
            </h1>
              <p className="text-sm text-gray-300 mt-1">Copyright © 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
