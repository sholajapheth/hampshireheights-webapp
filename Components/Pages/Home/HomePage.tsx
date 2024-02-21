"use client";
import { Header, Notification } from "@/Components";
import React, { useEffect, useState } from "react";
import Showcase from "./Showcase";
import OurMission from "./OurMission";
import OurProcesses from "./OurProcesses";
import Contact from "../../UI/Contact";
import Link from "next/link";

const Sliders = () => {
  const images = [
    "bg-[url('../public/images/landingBg_1.png')]",
    "bg-[url('../public/images/landingBg_2.png')]",
    "bg-[url('../public/images/landingBg_3.png')]",
    "bg-[url('../public/images/landingBg_4.png')]",
  ];
  const [index, setIndex] = useState(0);
  const bgImage = images[index];

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4); // Increment index cyclically
    }, 10000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const text = (() => {
    switch (index) {
      case 0:
        return {
          header: "DIGITAL TRANSFORMATION",
          tagline: `WE ENCOURAGE INTELLIGENT, 
            TECHNOLOGY-BASED SYSTEMS ACROSS EVERY BUSINESS TO SUCCEED`,
        };
      case 1:
        return {
          header: "Develop outstanding products fast",
          tagline: `Our team of IT experts and specialists \n\n
            ensure businesses have the right IT solutions to succeed.`,
        };
      case 2:
        return {
          header: "Artificial Intelligence solutions for your business.",
          tagline:
            "Hampshire Heights create products that let people do things differently.",
        };
      case 3:
        return {
          header: "Better technology features for next-gen customers.",
          tagline: `Share your challenges with our team and 
            we will work with you to develop a revolutionary digital product.`,
        };
      default:
        return {
          header: "",
          tagline: "",
        };
    }
  })();

  return (
    <div
      className={`${bgImage} bg-cover bg-center h-[50vh] md:h-[90vh]  flex justify-center items-center relative   transition-all duration-500 ease-in-out`}
    >
      <div className="w-full ">
        <div className="px-4  text-center  text-white uppercase">
          <h1 className="text-[2.4em] md:text-[4rem] lg:text-[6em]  leading-[.9em]  ">
            {text?.header}
          </h1>
          <div className="flex items-center justify-center ">
            <p className="my-8 text-base md:text-xl w-full md:w-[50%]">
              {text.tagline}
            </p>
          </div>

          {index === 0 && (
            <Link href={"/services/digital-transformation"} passHref>
              <button
                className={`mt-4 px-[4em] py-[1em] bg-secondary font-semibold text-white  md:text-xl text-base  hover:bg-secondary-dark  duration-300 hover:scale-110 transform transition-all ease-in-out `}
              >
                READ MORE
              </button>
            </Link>
          )}
        </div>

        <div className="w-full flex justify-center items-center absolute bottom-2 md:bottom-10 mt-8">
          <div className="flex items-center gap-4">
            {Array(images.length)
              .fill(0)
              .map((_, index_) => (
                <div
                  onClick={() => setIndex(index_)}
                  key={index_}
                  className={`h-[1em] ${
                    index_ === index
                      ? "bg-white w-[2em]"
                      : "bg-gray-400/45 w-[1em]"
                  } rounded-full cursor-pointer hover:scale-125 hover:bg-secondary/70 transition-all duration-200 ease-linear`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [slider, setSlider] = useState(2);

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

      <Sliders />

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
