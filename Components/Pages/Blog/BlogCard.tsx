import { BlogCardProps } from "@/Types/BlogCardType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }: { post: BlogCardProps }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="mt-8">
        <p className="pb-2 text-[#787878]">{post.tag}</p>
        <div className="border-t-[1px]  border-[#787878] py-6">
          <Image src={post.picture} width={500} height={300} alt={"blog"} />
          <p className="text-2xl text-primary font-bold my-4">
            Deep Insights into Machine Learning
          </p>
          <p className="mt-4">
            <b>{post.date}</b>,{post.author}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
