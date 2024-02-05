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
          <p className="text-2xl md:text-5xl font-bold ">
            DIGITAL TRANSFORMATION
          </p>
        </div>
        <Image
          src={"/images/d-transformation.png"}
          width={500}
          height={500}
          className="w-full md:w-[70%] mt-8"
          alt="digital transformation"
        />
      </div>

      <div className=" flex flex-col gap-6 items-center justify-center py-0 md:py-10 w-full md:w-[50%]">
        <div className="border-t-primary border-b-primary border-t-[1px] border-b-[1px] p-4 md:p-6 ">
          <p className="text-xl font-bold ">
            The positive outcome of Digital Transformation projects are
            essential to the on-going success of businesses across industries
            around the world.
          </p>
        </div>

        <Image
          src={"/images/keyboard.png"}
          width={500}
          height={500}
          className="w-full "
          alt="keyboard"
        />

        <p>
          Serving businesses to evolve and stay competitive in an ever-shifting
          and disruptive space. We embrace intelligent, technology enabled
          systems across every layer of your business to succeed. At Hampshire
          Heights, a big thrust of our strategy is to focus on human-centered
          innovation.
        </p>
      </div>

      <div className="my-5 md:my-10 w-full" />
      <Contact />
      {/* </div> */}
    </div>
  );
};

export default page;
