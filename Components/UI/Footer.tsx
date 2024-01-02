import Image from "next/image";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const quickLinks = [
  {
    name: "Delivery Leadership",
    link: "/",
  },
  {
    name: "Digital Transformation",
    link: "/",
  },
  {
    name: "Technology Consulting",
    link: "/",
  },
  {
    name: "Business Consulting",
    link: "/",
  },
  {
    name: "Artificial Intelligence",
    link: "/",
  },
  {
    name: "GDPR compliance Services",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="mt-8 md:mt-11 bg-primary md:px-16 p-4 text-white   pt-14  ">
      <div className=" flex flex-col md:flex-row pb-[6em]">
        <div className="flex-1">
          <Image src={"/logo.png"} alt="Logo" width={150} height={100} />
          <p className="mt-8">
            Our goal is to get a deep understanding of our client’s business and
            the rapidly evolving broader technical landscape while offering
            solutions.
          </p>
        </div>

        <div className="flex-1 flex flex-col mt-8 md:mt-0 items-center ">
          <div>
            <p>Quick Links</p>
            <div className="grid grid-cols-2">
              {quickLinks.map((link, index) => (
                <p key={index} className="mt-2 pr-4">
                  <u> {link.name}</u>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1  items-center justify-center  w-full">
          <div className="flex-1 flex flex-col ">
            <p>Contact Us</p>
            <div className="flex w-full items-center gap-2 text-nowrap mt-2">
              <BsPhone className="text-secondary" />
              <p>+234 706 547 6756</p>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-secondary" />
              <p>info@hhgcl.com</p>
            </div>
          </div>

          <div className="flex flex-row  items-center gap-6 mt-8 md:mt-4 ">
            <FaFacebookF className="text-2xl text-white" />
            <FaTwitter className="text-2xl text-white" />
            <FaInstagram className="text-2xl text-white" />
            <FaLinkedinIn className="text-2xl text-white" />
          </div>
        </div>
      </div>
      <hr />
      <p className="text-sm text-center mt-8">
        © 2020-2023 - HAMPSHIRE HEIGHTS - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
