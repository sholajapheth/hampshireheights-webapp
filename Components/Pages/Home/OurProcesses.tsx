import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const OurProcesses = () => {
  return (
    <div className=" flex flex-col items-center justify-center md:px-16 p-4 ">
      <p className=" text-xl font-bold text-primary ">OUR PROCESSES</p>

      <div className="w-full flex md:flex-row flex-col items-center justify-center md:mt-10 mt-5  gap-4">
        <div className="bg-[url('../public/images/ml.png')] p-8 md:py-8 md:px-16 bg-no-repeat bg-left bg-cover text-white flex flex-col gap-8">
          <h2 className="text-xl font-semibold">MACHINE LEARNING</h2>

          <p>Get in the process of learning with intellectual algorithms</p>

          <CgArrowLongRight className="text-3xl text-secondary" />
        </div>

        <div className="bg-[url('../public/images/robotic_process.png')] p-8 md:py-8 md:px-16 bg-no-repeat bg-left bg-cover text-primary flex flex-col gap-8">
          <h2 className="text-xl font-semibold uppercase">
            Robotic Process Automation
          </h2>

          <p>Get in the process of learning with intellectual algorithms</p>

          <CgArrowLongRight className="text-3xl text-secondary" />


        </div>
      </div>

    </div>
  );
};

export default OurProcesses;
