"use client";
import Image from "next/image";
import React from "react";
import { blogPost } from "./dummyData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Markdown from "react-markdown";

const BlogDetails = ({ id }: { id: any }) => {
  const post = blogPost.find((post) => post.id == id);

  return (
    <div className="w-full flex flex-col  items-center ">
      <div className="w-[90%] md:w-[70%] ">
        <p className="text-3xl md:text-7xl font-bold text-primary  my-[2em] md:my-[1.5em]">
          {post?.title}
        </p>

        <div>
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={
                  post?.authorImage ? post?.authorImage : "/images/author.png"
                }
                width={50}
                height={50}
                alt="blog"
                className=""
              />

              <div>
                <p className="font-bold ">{post?.author}</p>
                <p>{post?.designation}</p>
              </div>
            </div>
            <p className="text-[#7E8492]">10 min read May 20, 2023</p>
          </div>

          <div className="mt-4">
            <Image
              src={post?.picture!}
              width={500}
              height={300}
              alt={"blog"}
              className="w-full"
            />

            <div className="mt-6 text-justify">
              {post?.fullBlog?.map((blog, index) => (
                <div className="w-full text-wrap" key={index}>
                  <p className="leading-[2em]">{blog.paragraph}</p>
                  {blog.bullets && (
                    <ul className="list-disc">
                      {blog.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <br />
                </div>
              ))}

              <div className="mt-10 md:flex items-center  ">
                <div className="flex md:iniline items-center justify-center md:justify-normal">
                  <Image
                    src={
                      post?.authorImage
                        ? post?.authorImage
                        : "/images/author.png"
                    }
                    width={600}
                    height={300}
                    alt="author"
                    className="w-[80%] "
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div className="inline md:flex gap-4 items-center">
                    <div className="flex flex-row  items-center gap-6 mt-8 md:mt-4 ">
                      <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                        <FaFacebookF className="md:text-2xl text-[#1E2A58]" />
                      </button>
                      <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                        <FaTwitter className="md:text-2xl text-[#1E2A58] " />
                      </button>

                      <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                        <FaInstagram className="md:text-2xl text-[#1E2A58]" />
                      </button>
                      <button className="bg-[#1D1E25] bg-opacity-10 rounded-full p-2">
                        <FaLinkedinIn className="md:text-2xl text-[#1E2A58]" />
                      </button>
                    </div>
                    <p className="mt-4">Share this article</p>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    <p>Written by</p>
                    <p className="text-2xl font-bold">{post?.author}</p>
                    <p>{post?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8">{post?.aboutAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
