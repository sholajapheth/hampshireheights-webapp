import React from "react";
import { teamMembers } from "./dummyData";
import Image from "next/image";

const Team = () => {
  return (
    <div className=" text-center w-[90%] flex flex-col items-center justify-center ">
      <div className="">
        <p className="font-bold text-3xl md:text-4xl text-primary mb-4 ">
          Meet our amazing team
        </p>
        <p>
          The people who make things happen in our company and who believe and
          build the future.
        </p>
      </div>

      <div className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8  items-center justify-center   ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="mb-6 md:mb-0 flex flex-col items-center md:items-start  hover:scale-105 cursor-pointer transition-all duration-300  ease-in-out"
          >
            <Image
              height={200}
              width={100}
              className="rounded-md mb-4 w-[80%] "
              src={member.img}
              alt={member.name}
            />
            <p className="font-bold md:text-xl text-primary  ">{member.name}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
