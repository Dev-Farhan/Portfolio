import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => (
  <motion.div
    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-8 py-4 shadow-dark cursor-pointer absolute"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x, y }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
  >
    {name}
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-8xl mt-64 w-full text-center">Skills</h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-9vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="-2vw" y="9vw" />
        <Skill name="NextJS" x="30vw" y="-5vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="ExpressJS" x="-29vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="SASS" x="-15vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
