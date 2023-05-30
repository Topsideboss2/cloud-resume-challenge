import React from "react";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap md:gap-0 gap-8  bg-yellow-100  py-10 justify-around">
      <>
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 bg-white rounded-full p-2"
            key={technology.name}
          >
            <img src={technology.icon} />
          </div>
        ))}
      </>
    </div>
  );
};

export default Tech;
