"use client";
import React, { useState } from "react";
import FeaturedPost from "./FeaturedPost";
import BlogCard from "./BlogCard";
import { BlogCardProps } from "@/Types/BlogCardType";
import Contact from "../../UI/Contact";
import { blogPost } from "./dummyData";

const BlogPage = () => {
  const [blogNav, setBlogNav] = useState([
    {
      id: 1,
      title: "All Articles",
      isActive: true,
    },
    {
      id: 2,
      title: "Technology",
      isActive: false,
    },
    {
      id: 3,
      title: "Business",
      isActive: false,
    },
    {
      id: 4,
      title: "Leadership",
      isActive: false,
    },
    {
      id: 5,
      title: "Operational",
      isActive: false,
    },
  ]);


  return (
    <div className=" ">
      <div className="bg-[#FAFAFA]  w-full flex flex-col  items-center  py-10 mb-10">
        <div className="w-[90%] md:w-[90%]  ">
          <h1 className="text-primary text-3xl font-extrabold text-left my-6 md:my-12">
            OUR BLOG
          </h1>
          <div className=" hidden md:inline ">
            {blogNav.map((item) => (
              <button
                onClick={() =>
                  setBlogNav(
                    blogNav.map((nav) =>
                      nav.id === item.id
                        ? { ...nav, isActive: true }
                        : { ...nav, isActive: false }
                    )
                  )
                }
                key={item.id}
                className={`${
                  item.isActive
                    ? "border-secondary text-primary border-b-2 "
                    : " text-gray-800x"
                } px-4 py-2  font-semibold mr-4 text-base md:text-xl`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className=" inline md:hidden">
            <select className="w-full border-2 border-primary rounded-md px-4 py-2 text-base md:text-xl ">
              {blogNav.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center ">
        <div className="w-[90%] md:w-[90%] ">
          <div className="flex items-center flex-col">
            <FeaturedPost />

            <div className="mt-8 md:mt-16 inline md:flex gap-8 mb-8 ">
              {blogPost.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
