"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiEqualLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";


const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "about-us" },
  { name: "Services", href: "services" },
  { name: "Blog", href: "blog" },
  { name: "Contact Us", href: "#" },
];


const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMenu = isMenuOpen && isMobile;

  return (
    <div className={`flex justify-between md:px-16 ${isScrolled ? "p-1": "p-2"} items-center bg-white`}>
      <Image src={"/logo.png"} width={150} height={100} alt={"logo"}  className={`
        ${isScrolled ? "w-[20%] md:w-[8%] lg:w-[6%] transition-all duration-200 ease-in-out  " : "w-1/1 transition-all duration-200 ease-in-out "}
      
      `}/>

      {isMobile  && (
        <div className="md:hidden transition-all  ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="pr-1">
            <RiEqualLine
              className={`text-[2em] ${
                isMenuOpen ? "animate-bounce duration-300" : ""
              }`}
            />
          </button>
        </div>
      )}

      <div
        className={`${
          isMenuOpen ? "absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 justify-center items-center" : "md:flex hidden"
        } gap-4 md:flex    `}
      >

       
        <button  onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 inline md:hidden absolute top-4 right-4">
            <AiOutlineClose
                className={`text-[2em] ${
                isMenuOpen ? "animate-bounce duration-300" : ""
                }`}
            />
        </button>
    
        {navigation.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-base font-semibold text-primary hover:text-gray-900"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* {isMobile ? (
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1"
            >
              <RiEqualLine className={`text-[2em] ${isMenuOpen ? 'animate-bounce duration-300' : ''}`} />
            </button>
          </div>
        ) : (
          <div className={`${isMenuOpen ? "flex flex-col items-center bg-primary " : "flex"} gap-4 md:flex `}>
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-primary hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </div> */}
      {/* )} */}
    </div>
  );
};

export default Header;
