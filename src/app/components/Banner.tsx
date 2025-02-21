"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import image from "../../assets/profile.jpg";

const Banner = () => {
  return (
    <div
      className="flex flex-col-reverse mt-6 md:mt-0 md:flex-row justify-between items-center p-4 md:p-5 lg:p-20 bg-white dark:bg-gray-900"
      id="banner"
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-center md:text-left mt-10 md:m-auto dark:text-white"
          style={{ fontWeight: "bold" }}
        >
          Arfan Ahmed <br />
          <span
            className="text-3xl md:text-4xl lg:text-5xl text-red-500"
            style={{ fontWeight: "Normal" }}
          >
            <Typewriter
              words={["A Frontend Developer", "A MERN-Stack Developer"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 max-w-[500px] mt-10 text-justify">
          I am a junior MERN stack developer specializing in front-end
          development. With a focus on creating visually appealing and
          user-friendly interfaces, I bring a blend of creativity and technical
          proficiency to every project.
        </p>

        <div className="flex mt-6 gap-6">
          <a href="https://www.linkedin.com/in/arfan-ahmed40/" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-sky-500 to-indigo-500 px-4 rounded py-2 text-white"
            >
              Hire Me
            </motion.button>
          </a>

          <a
            href="https://drive.google.com/file/d/1znXQ_foJduuTLLD_KDG2LHYF6okAZUSS/view?usp=sharing"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 rounded py-2 text-white"
            >
              Download Resume
            </motion.button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl text-gray-900 dark:text-white font-semibold mt-10">
            Find Me on:{" "}
          </h2>
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61551041847783&mibextid=ZbWKwL"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CiFacebook className="text-gray-900 dark:text-white text-4xl" />
              </motion.button>
            </a>
            <a
              href="https://www.linkedin.com/in/arfan-ahmed40/"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-gray-900 dark:text-white text-4xl" />
              </motion.button>
            </a>
            <a href="https://github.com/asuselessbrain" target="_blank">
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.8 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-gray-900 dark:text-white text-4xl" />
              </motion.button>
            </a>
            <a href="https://x.com/shoha50275" target="_blank">
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AiFillTwitterCircle className="text-gray-900 dark:text-white text-4xl" />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1, // Zoom in to 1.2x, then back to normal
        }}
        transition={{
          duration: 2, // Duration of the full zoom cycle
          ease: "easeInOut",
        }}
      >
        <Image
          src={image}
          priority
          className="rounded-full w-[300px] md:w-[300px] lg:w-[500px] border-4 border-gray-200 dark:border-gray-700"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Banner;
