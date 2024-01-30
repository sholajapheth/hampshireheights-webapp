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
          <p className="text-2xl md:text-5xl font-bold uppercase">
            Delivery Leadership
          </p>
        </div>
        <Image
          src={"/images/delivery_leadership.png"}
          width={500}
          height={500}
          className="w-full md:w-[70%] mt-8"
          alt="digital transformation"
        />
      </div>

      <div className=" flex flex-col gap-6 items-center justify-center py-0 md:py-10 w-full md:w-[50%]">
        <div className="border-t-primary border-b-primary border-t-2 border-b-2 p-4 md:p-6 ">
          <p className="text-xl font-bold text-justify md:text-start ">
            Combining more traditional approaches to service operations such as
            ITIL with more iterative approaches such as properly empowered
            WebOps and flexible provisioning and service platforms, our teams
            continually look for the most appropriate and efficient approach to
            providing operational services. Across our clients, we have
            experience of designing and implementing efficient and repeatable
            Incident management, request fulfilment, problem management,
            application management and IT operations control capabilities.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12"></div>

      <div className="my-5 md:my-10 w-full" />
      <Contact />
      {/* </div> */}
    </div>
  );
};

export default page;
