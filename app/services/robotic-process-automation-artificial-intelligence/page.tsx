import Contact from "@/Components/UI/Contact";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center py-0 md:py-10 w-full">
        <div className="text-primary">
          <p className="text-base uppercase">Services</p>
          <hr className="my-2 h-1 bg-primary" />
          <p className="text-2xl md:text-5xl font-bold uppercase ">
            Robotic Process Automation <br />& Artificial Intelligence
          </p>
        </div>
        <Image
          src={"/images/robotic_bg.png"}
          width={500}
          height={500}
          className="w-full md:w-[70%] mt-8"
          alt="digital transformation"
        />
      </div>

      <div className=" flex flex-col gap-6 items-center justify-center py-0 md:py-10 w-full md:w-[70%]">
        <div className=" p-4 md:p-6 ">
          <p className="text-2xl md:text-5xl font-bold  ">
            Robotic Process Automation
          </p>
          <p className=" text-[16px] md:text-[18px]  mt-5 ">
            Our robotic process automation can be used to create a digital
            workforce to automate high-volume repetitive tasks, maximizing your
            knowledge and workers productivity by enabling them to focus on
            higher-value activities.
          </p>
        </div>

        <Image
          src={"/images/browsers.png"}
          width={500}
          height={500}
          className="w-full "
          alt="keyboard"
        />

        <div className=" p-4 md:p-6 ">
          <p className="text-2xl md:text-5xl font-bold  ">
            Artificial Intelligence
          </p>
          <p className=" text-[16px] md:text-[18px]  mt-5">
            While it’s a fact that AI has various use cases among different
            industries and brings tangible results, it’s also difficult to
            immediately decide how to use it. With deep learning, machine
            learning, natural language processing, smart search engines or
            predictive models supporting the decision-making processes, AI can
            transform your business but before you implement AI in your company,
            you need to be well-prepared. At Hampshire Heights, we support our
            clients not only with code but also with our business expertise. You
            will get algorithms that will work for you. Work not only
            technically, but also bring benefits.
          </p>
        </div>
      </div>

      <div className="my-5 md:my-2 w-full" />
      <Contact />
      {/* </div> */}
    </div>
  );
};

export default page;
