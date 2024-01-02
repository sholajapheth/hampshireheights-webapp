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
                src="/images/author.png"
                width={50}
                height={50}
                alt="blog"
                className=""
              />

              <div>
                <p className="font-bold ">Tope Akinmegha</p>
                <p>Full Stack Developer</p>
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
              <p>
                Machine learning (ML) is the subset of artificial intelligence
                (AI) that focuses on building systems that learn, or improve
                performance, based on the data they consume, that is, it teaches
                computers to learn from experience. Machine learning and AI are
                often discussed together, and the terms are sometimes used
                interchangeably, but they don’t mean the same thing. An
                important distinction is that although all machine learning is
                AI, not all AI is machine learning. These days, machine learning
                is at work all around us. When we interact with banks, shop
                online, or use social media, machine learning algorithms come
                into play to make our experience efficient, smooth, and secure.
                Machine learning uses two types of techniques: Supervised
                learning trains a model on known input and output data so that
                it can predict future outputs, Supervised machine learning
                algorithms are the most commonly used.
              </p>

              <br />
              <br />

              <p>
                With this model, a data scientist acts as a guide and teaches
                the algorithm what conclusions it should make. Just as a child
                learns to identify fruits by memorizing them in a picture book,
                in supervised learning, the algorithm is trained by a dataset
                that is already labeled and has a predefined output. Examples of
                supervised machine learning include algorithms such as linear
                and logistic regression, multiclass classification, and support
                vector machines. Unsupervised learning finds hidden patterns or
                intrinsic structures in input data.Unsupervised machine learning
                uses a more independent approach, in which a computer learns to
                identify complex processes and patterns without a human
                providing close, constant guidance. Unsupervised machine
                learning involves training based on data that does not have
                labels or a specific, defined output. To continue the childhood
                teaching analogy, unsupervised machine learning is akin to a
                child learning to identify fruit by observing colors and
                patterns, rather than memorizing the names with a teacher’s
                help. The child would look for similarities between images and
                separate them into groups, assigning each group its own new
                label. Examples of unsupervised machine learning algorithms
                include k-means clustering, principal and independent component
                analysis, and association rules. Machine learning has blossomed
                across a wide range of industries, supporting a variety of
                business goals and use cases including: • Customer lifetime
                value • Anomaly detection • Dynamic pricing • Predictive
                maintenance • Image classification • Recommendation engines
                Hence choosing which approach is best for your needs, be it
                supervised or unsupervised machine learning algorithm, usually
                depends on factors related to the structure and volume of your
                data, and the use case to which you want to apply it. At
                Hampshire Heights we are able to offer deeper insights to our
                clients in ways that impact their businesses positively.
              </p>

              <div className="mt-10 md:flex items-center  ">
                <div className="flex md:iniline items-center justify-center md:justify-normal">
                  <Image
                    src={"/images/author2.png"}
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
                 <p >Written by</p>
                  <p className="text-2xl font-bold">Tope Akinmegha</p>
                  <p>Full Stack Developer</p>
                 </div>
                </div>
              </div>
            </div>
            <p className="mt-8">Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
