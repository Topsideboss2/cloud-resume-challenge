import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects, achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementsCard = ({ name, organization, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="gap-20 "
    >
      <div className="flex flex-col ">
        <li className="text-black font-bold">{name}</li>
        <p className="text-gray-700 mb-20">{organization}</p>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  index,
  name,
  company,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-100 p-5 rounded-2xl sm:w-[450px] w-full"
      >
        <div
          className="relative w-full h-[180px]"
          onClick={() => window.open(website_link, "_blank")}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="mt-4 flex flex-wrap gap-2 text-yellow-100">
            {company}
          </div>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <span className="hash-span" id="work"></span>
      <div className="flex lg:flex-row flex-col justify-start mt-10  w-[100vw] ">
        <div className="flex flex-col justify-center items-center lg:mx-0 mx-5  lg:w-[50vw]  lg:mb-36 mb-10">
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} lg:ml-[-180px]`}>
              Projects
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col flex-wrap gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-yellow-100 lg:w-[50vw] lg:pl-20 pl-10 lg:pb-0 pb-20">
          <h1 className={`${styles.sectionHeadText} mb-20`}>Achievements</h1>
          <div className="gap-20 ">
            {achievements.map((achievement, index) => (
              <AchievementsCard
                key={`achievement-${index}`}
                index={index}
                {...achievement}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
