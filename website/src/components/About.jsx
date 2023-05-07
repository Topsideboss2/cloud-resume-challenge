import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { boy } from "../assets";


const About = () => {
  const openCv = () => {
    window.open(
      "https://drive.google.com/file/d/15-CZldT1guNk8AHrtVfJCwVZDZMKx3Gc/view?pli=1"
    );
  };
  const openBlog = () => {
    window.open("https://topsideboss2.engineer/");
  };
  return (
    <>
      <span className="hash-span" id="about"></span>
      <div className="flex md:flex-row flex-col justify-around ">
        <div className=" flex  flex-col md:px-28 px-10 md:mt-20  items-center relative ">
          <motion.div variants={textVariant()}>
            <h2
              className={`${styles.sectionHeadText} lg:ml-[-250px] text-black-100 `}
            >
              ABOUT ME
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="font-jost mt-20 text-black-100 md:text-[17px] text-[12px] max-w-3xl leading-[30px]"
          >
            I am experienced in Amazon Web Services and I help design,
            implement, and maintain cloud infrastructure that is secure,
            scalable, and highly available.
          </motion.p>
          <motion.p className="font-jost mt-4 md:mb-0 mb-24 text-black-100 md:text-[17px] text-[12px] max-w-3xl leading-[30px]">
            I also build pipelines that automate the build, testing, and
            deployment process for applications. I am popularly known as the
            Shaman of Shell Scripting, Brother of Ansible, Knight of Vim,
            Chaplain of Terraform, Droid of Docker, Wizard of Jenkins.
          </motion.p>

          <motion.button
            className="font-jost absolute bottom-0 mb-8  bg-yellow-100 rounded-full text-black-100 py-3 px-16 w-72 justify"
            onClick={openCv}
          >
            View my CV
          </motion.button>
        </div>
        <div className="flex bg-yellow-100 md:w-[70vw]   justify-center">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="flex flex-col justify-center items-center p-10"
          >
            <motion.img src={boy} alt="boy" className="w-96 py-20" />
            <motion.button
              className="font-jost bg-black-100 rounded-full text-yellow-100 py-3 px-16 w-72 z-0"
              onClick={openBlog}
            >
              Visit my blog
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
