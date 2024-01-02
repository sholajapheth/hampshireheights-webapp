import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="md:px-16 p-4 mt-8">
      <Image
        src={"/images/misson.png"}
        alt="Our Mission"
        width={900}
        height={500}
        className="w-full"
      />

      <div className="flex md:flex-row flex-col items-center justify-center md:justify-between my-14">
        <p className="lg:w-[40%] md:w-[30%] text-xl font-bold text-primary ">OUR <br className="hidden md:inline" /> MISSION</p>
        
        <p className="md:text-left text-center mt-4 md:mt-0 font-medium w-full text-primary leading-8 md:leading-10 md:font-semibold">
          Hampshire Heights is a technology solutions provider, building and
          delivering Business solutions across industries and offering our
          clients different, powerful, efficient and realistic consulting that
          reflects industry best practices. Our goal is to get a deep
          understanding of our client’s business and the rapidly evolving
          broader technical landscape while offering solutions. Our specialism
          in Architectural and Technology Consulting means that we are able to
          offer deeper insights into our clients organisational and IT
          programmes and engage at all levels of their organisations.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
  