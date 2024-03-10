import Image from "next/image";
import React from "react";

const Showcase = () => {
  const trustedCompanies = [
    {
      logo: "/images/trustcompanies/1.png",
    },
    {
      logo: "/images/trustcompanies/2.png",
    },
    {
      logo: "/images/trustcompanies/6.png",
    },
    // do to 5
    {
      logo: "/images/trustcompanies/3.png",
    },
    {
      logo: "/images/trustcompanies/4.png",
    },
    {
      logo: "/images/trustcompanies/5.png",
    },
  ];
  return (
    <div className="bg-[#FAFAFA]  py-20 px-8 text-center flex flex-col items-center justify-center">
      <p className="text-base md:text-xl">Trusted by great companies</p>

      <div className="flex items-center justify-between flex-wrap w-[90%] md:w-[80%] lg:w-[60%]  ">
        {trustedCompanies.map((company, index) => (
          <Image
            key={index}
            src={company.logo}
            width={100}
            height={100}
            alt="company logo"
            className="mx-2 py-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
