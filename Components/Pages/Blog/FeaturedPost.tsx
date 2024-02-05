import Image from "next/image";
import React from "react";

const FeaturedPost = () => {
  return (
    <div className="grid grid-cols-21 md:grid-cols-2 gap-8 items-center">
      <div className="flex-1 flex-col items-start justify-between h-full flex border-t-[1px] border-b-[1px] border-[#787878]">
        <div className="h-full ">
          <p className="text-gray-600 text-sm mb-4">PROJECT MANAGMENT</p>
          <p className="text-primary text-2xl mb-10 md:text-4xl lg:text-6xl font-bold">
            CRM Insights: Selecting the Right One for Your Organization
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          <b className="text-primary">05 Sep 2022,</b> by Hampshire Heights
        </p>
      </div>
      <Image
        src={"/images/featuredPost.png"}
        height={200}
        width={300}
        alt="featured post"
        className="flex-1 hidden md:inline w-full"
      />
    </div>
  );
};

export default FeaturedPost;
