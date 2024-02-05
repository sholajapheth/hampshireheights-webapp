"use client";
import { Header, Notification } from "@/Components";
import React, { useEffect, useState } from "react";
import Showcase from "./Showcase";
import OurMission from "./OurMission";
import OurProcesses from "./OurProcesses";
import Contact from "../../UI/Contact";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollThreshold = 100; // Adjust this threshold as needed

    setIsScrolled(scrollTop > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const uniqueServices = [
    {
      icon: "/images/target.png",
      item: "Technology Consulting",
    },
    {
      icon: "/images/like.png",
      item: "Delivering Leadership",
    },
    {
      icon: "/images/briefcase.png",
      item: "Business Consulting",
    },
    {
      icon: "/images/services.png",
      item: "Operational Services",
    },
  ];

  return (
    <main>
      <div className="sticky top-0 z-40">
        {/* {showNotification && <Notification setShowNotification={setShowNotification} />} */}
      </div>
      <div className="bg-[url('../public/images/landingBg.png')] bg-cover bg-center h-[90vh] flex justify-center items-center">
        <div className="px-4 text-center md:text-left  text-white">
          <h1 className="text-[2.5em] md:text-[5rem] lg:text-[8em] leading-[1em] font-semibold">
            <span className="hidden md:inline">-</span> DIGITAL <br />{" "}
            TRANSFORMATION
          </h1>
          <p className="mt-2 text-base md:text-xl">
            WE ENCOURAGE INTELLIGENT , TECHNOLOGY BASED SYSTEMS{" "}
            <br className="hidden md:inline" /> ACROSS EVERY BUSINESS TO SUCCEED
          </p>

          <button
            className={`mt-4 px-8 py-4 bg-secondary font-semibold text-white  md:text-xl text-base  hover:bg-secondary-dark  duration-300 hover:scale-110 transform transition-all ease-in-out `}
          >
            READ MORE
          </button>
        </div>
      </div>

      <Showcase />

      <div className="text-center  flex flex-col  items-center justify-center mt-8 md:mt-14 ">
        <div className=" w-full md:w-[70%] lg:w-[60%]">
          <div className="items-center flex flex-col  w-full justify-center pb-10 ">
            <p className="text-2xl font-bold uppercase text-primary mb-4">
              Our Unique Services
            </p>
            <p className="">
              Hampshire Heights is a leading consulting firm specializing in IT
              Service Management, Operational Readiness, Business
              Transformation, Robot Process Automation, Artificial Intelligence,
              Programme and Project Management, and Solution Delivery for global
              multi-nationals.
            </p>
          </div>

          <div className="flex flex-col  md:flex-row py-4 items-center justify-around w-full">
            {uniqueServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center  mb-10"
              >
                <img
                  src={service.icon}
                  alt=""
                  className="md:h-10 h-14 w-14  md:w-10"
                />
                <p className=" font-bold text-primary mt-4">{service.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurMission />

      <OurProcesses />

      <div className=" flex flex-col items-center justify-center md:px-16 p-4 mt-8 ">
        <Contact />
      </div>
    </main>
  );
};

export default HomePage;
