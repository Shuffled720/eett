"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <>
      <section id="menu" className="container mx-auto">
        <motion.h1
          className="text-center text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Menu
        </motion.h1>
        <div className="flex flex-col gap-8">
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              alt="menu"
              className="menu-img w-full h-auto object-cover"
              src="/menu.png"
              width={1500}
              height={1000}
            />
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              alt="time"
              className="menu-img w-full h-auto object-cover"
              src="/time.png"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Menu;
