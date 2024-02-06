import Image from "next/image";
import React from "react";
import { blogPost } from "./dummyData";
import Link from "next/link";

const ftPost = blogPost[2];

const FeaturedPost = () => {
  return (
    <div className="grid grid-cols-21 md:grid-cols-2 gap-8 items-center">
      <div className="flex-1 flex-col items-start justify-between h-full flex border-t-[1px] border-b-[1px] border-[#787878]">
        <div className="h-full ">
          <p className="text-gray-600 text-sm mb-4">{ftPost.tag}</p>
          <Link href={`/blog/${ftPost.id}`}>
            <div className="h-full flex flex-col justify-center items-center flex-1 ">
              <p className="text-primary text-2xl mb-10 md:text-4xl lg:text-6xl font-bold hover:scale-105 duration-200 transition-all ease-linear">
                {ftPost.title}
              </p>
            </div>
          </Link>
        </div>

        <p className="text-gray-600 text-sm">
          <b className="text-primary">{ftPost.date},</b> {ftPost.author}
        </p>
      </div>
      <Image
        src={ftPost.picture}
        height={200}
        width={300}
        alt="featured post"
        className="flex-1 hidden md:inline w-full"
      />
    </div>
  );
};

export default FeaturedPost;
