import { useEffect, useState } from "react";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex justify-center items-center `}
      id="home"
    >
      <div className={` ${styles.paddingX} items-center justify-center`}>
        <div className=" flex flex-col items-center justify-center  gap-20">
          <h1
            className={`${styles.heroHeadText}  font-medium  text-yellow-100`}
          >
            MARK KIBARA
          </h1>
          <div
            className={`${styles.heroSubText}  mt-2 text-white-100 flex flex-row gap-2`}
          >
            I'm a
            <span className="text-yellow-100">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("DevOps Engineer")
                    .deleteAll()
                    .typeString("Cloud Engineer")
                    .deleteChars(8)
                    .typeString("Architect")
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </div>
          <button className="bg-yellow-100 rounded-full text-black py-5 px-16">
            <a href="#about">ABOUT ME</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
