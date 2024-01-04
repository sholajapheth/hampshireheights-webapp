import Image from "next/image";
import React from "react";
import Team from "./Team";
import Contact from "@/Components/UI/Contact";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#FAFAFA] flex items-center justify-center py-10">
        <div className="w-[92%] md:w-[80%] md:grid grid-cols-3 items-center  ">
          <h1 className="text-primary font-bold text-2xl md:text-3xl mb-3 md:mb-0">
            WHO ARE WE?
          </h1>
          <p className="leading-8 md:leading-10 text-justify col-span-2">
            Hampshire Heights is a leading consulting firm specializing in IT
            Service, Management, Operational Readiness, Business Transformation,
            Robot Process Automation, Artificial Intelligence, Programme and
            Project Management, and Solution Delivery for global multi-nationals
            (Fortune 100s) and Government Organisations. We have immense
            experience in the use of technology to achieve business efficiency
            and effectiveness, the development of End-to-End Service Models and
            the introduction, development and management of 3rd party Supplier
            Services. We have been active in the marketplace since the mid ’90s
            with over 20 years of experience in the IT Industry.
          </p>
        </div>
      </div>

      <div className="w-full relative   ">
        <div className="absolute top-0 right-0 h-[40%] w-[5%] bg-secondary z-40" />
        <Image
          src="/images/about-us.png"
          width={200}
          height={100}
          className="w-full"
          alt="about us"
        />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 mt-20 w-[90%] border-[#787878] border-b-2 border-t-2 placeholder-gray-600 py-6 md:py-10">
        <div className="flex flex-col gap-3 items-center mb-10 w-[100%] md:w-[80%]">
          <Image
            src="/images/enhance-business.png"
            width={100}
            height={80}
            className=" "
            alt="about us"
          />

          <p className="text-secondary">Our Visions</p>
          <p className="font-bold text-2xl md:text-3xl text-primary">
            Enhance Businesses
          </p>
          <p className="leading-8 md:leading-10 text-justify md:text-center">
            Our mission is to provide appropriate solutions to our clients as a
            means of across the board improvement in the progression and the
            standard of their businesses, and in doing so, society as a whole.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center w-[100%] md:w-[80%]">
          <Image
            src="/images/holistic.png"
            width={100}
            height={80}
            className=" "
            alt="about us"
          />

          <p className="text-secondary">Our Visions</p>
          <p className="font-bold text-2xl md:text-3xl text-primary">
            Holistic Betterment
          </p>
          <p className="leading-8 md:leading-10 text-justify md:text-center">
            Our mission is to enhance businesses and society by offering
            tailored solutions that lead to comprehensive improvement.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:grid  md:grid-cols-2 md:gap-14 items-center  mt-10 md:mt-20 w-[90%]">
        <div>
          <p className="font-bold text-2xl md:text-3xl text-primary mb-4 ">
            Strategic Partnership
          </p>
          <p className="leading-8 md:leading-10 text-justify ">
            We collaborate with strategic global technical partners who we have
            worked with on a number of major projects, within the finance
            industry, the RPA and AI space. Our relationship has thrived over
            the last few years as we have successfully implemented RPA and AI in
            various organisations. We offer consultancy services on how you can
            re-imagine the process and use data effectively through RPA
            automation, data science and artificial intelligence machine
            learning. We take pride in our integrated approach to intelligent
            automation. Hampshire Heights UK Ltd provides strategic consulting,
            implementation and delivery services for robotic process automation
            and artificial intelligence for the Banking and Financial Services
            industry.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-5 md:m-0 w-full ">
          <Image
            src="/images/p1.png"
            width={500}
            height={300}
            className="w-full"
            alt="about us"
          />{" "}
          <Image
            src="/images/p2.png"
            width={500}
            height={300}
            className="w-full"
            alt="about us"
          />{" "}
          <Image
            src="/images/p3.png"
            width={500}
            height={300}
            className="w-full"
            alt="about us"
          />
        </div>
      </div>
      <div className="py-14 md:py-24  bg-[#FAFAFA] w-full mt-4 flex flex-col items-center justify-center">

        <Team />

<div className="my-5 md:my-10"/>
        <Contact />
      </div>


      
    </div>
  );
};

export default AboutUs;
