import React from "react";
import {  BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const openGit = () => {
    window.open("https://github.com/Topsideboss2", "_blank");
  };
  const openLink = () => {
    window.open("https://www.linkedin.com/in/mark-kibara/", "_blank");
  };
  const openTwitter = () => {
    window.open("https://twitter.com/MuriiFX", "_blank");
  };

  return (
    <div className="flex flex-row bg-black-100  items-center justify-around py-5 gap-5">
      <div className="flex ">
        <p className="text-white   font-sans text-[12px]">
          Suter Inc@2023 All rights reserved
        </p>
      </div>
      <div className="flex sm:gap-20 gap-5 ">
        <span className="text-yellow-100 cursor-pointer " onClick={openGit}>
          <FaGithub />
        </span>
        <span className="text-yellow-100 cursor-pointer" onClick={openLink}>
          <FaLinkedin />
        </span>
        <span className="text-yellow-100 cursor-pointer " onClick={openTwitter}>
          <BsTwitter />
        </span>
      </div>
    </div>
  );
};

export default Footer;
