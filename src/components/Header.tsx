"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="flex flex-col items-center gap-4 py-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="https://docs.google.com/spreadsheets/d/1eghTPtX3DmHb0A-xETKaKEDnu51EqA9aA2finQNsjbQ/edit?usp=sharing">
        <motion.h1
          className="text-center text-4xl py-2 cursor-pointer hover:text-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          EE Time-Table
        </motion.h1>
      </Link>
      <motion.nav
        className="flex gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link href="/todo">
          <motion.div
            className="text-lg font-medium hover:text-blue-600"
            whileHover={{ scale: 1.1 }}
          >
            Todo
          </motion.div>
        </Link>
        <Link href="/fast-calculation">
          <motion.div
            className="text-lg font-medium hover:text-blue-600"
            whileHover={{ scale: 1.1 }}
          >
            Cal
          </motion.div>
        </Link>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
