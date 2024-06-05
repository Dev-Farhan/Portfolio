import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <>
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl">
            {position}&nbsp;
            <span className="capitalize text-primary">{company}</span>
          </h3>
          <span className="capitalize font-medium text-dark/75">
            {time} | {address}
          </span>
          <p className="font-medium w-full">{work}</p>
        </motion.div>
      </li>
    </>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            position="Frontend Developer"
            company="BookMyAi"
            time="Dec 2023- May 2024"
            address="Indore MP"
            work="As a Frontend Developer at Bookyai, I have gained extensive experience in building and maintaining high-performance web applications using React and Next.js. My responsibilities included developing reusable components, integrating APIs, optimizing performance, and enhancing UI/UX. I played a key role in improving page load times by 30%, increasing user retention by 20%, and developing a shared component library to streamline development. This role has significantly enhanced my technical skills and my ability to deliver exceptional digital experiences."
          />
          <Details
            position="Training MERN Stack"
            company="Universal Informatics"
            time="Sep 2022- Feb 2023"
            address="Indore MP"
            work="Before starting my professional journey, I completed a comprehensive MERN Stack Developer training program at Universal Informatics in Indore. This program provided me with in-depth knowledge and hands-on experience in MongoDB, Express.js, React, and Node.js, enabling me to build robust full-stack web applications. The training significantly enhanced my backend development skills and further strengthened my frontend capabilities, preparing me to excel in my career as a full stack developer."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
