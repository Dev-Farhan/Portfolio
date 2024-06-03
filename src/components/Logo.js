"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";


const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className=" flex items-center justify-center mt-2"
    >
      <Link
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{ scale: 1.5 }}
      >
        MF
      </Link>
    </motion.div>
  );
}

export default Logo
