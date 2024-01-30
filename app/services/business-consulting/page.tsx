import Contact from "@/Components/UI/Contact";
import Image from "next/image";
import React from "react";

const section_data = [
  {
    title: "Business Analysis",
    text: "Combining more traditional approaches to service operations such as ITIL with more iterative approaches such as properly empowered WebOps and flexible provisioning and service platforms, our teams continually look for the most appropriate and efficient approach to providing operational services. Across our clients, we have experience of designing and implementing efficient and repeatable Incident management, request fulfilment, problem management, application management and IT operations control capabilities.",
    image: "/images/business_analysis.png",
  },
  {
    title: "User Research",
    text: "User research allows your team to understand its users so they can design the right kind of service. Our researchers are happy to take end-to-end ownership of planning a programme of research, develop a clear understanding and empathy with your users and design, conduct and analyse user research using a range of techniques.",
    image: "/images/user_research.png",
  },
  {
    title: "Content Design",
    text: "Our content designers take end-to-end responsibility for developing quality content for the applications or services being delivered. They are perfectly comfortable developing content plans and strategies based upon user needs, producing clear and unambiguous content while communicating the principles of content design to the wider teams.",
    image: "/images/content_design.png",
  },
  {
    title: "Service Design",
    text: "When delivering digital products in an agile way it is important that the service manager heading up the initiative must have the decision-making authority to deliver on all aspects. This can make the role very demanding and our own service managers are experienced in helping support our clients develop, operate and continually improve their digital services.",
    image: "/images/service_design.png",
  },
];

const Section = ({
  title,
  text,
  image,
  index,
}: {
  title: string;
  text: string;
  image: string;
  index: number;
}) => {
  const isReverse = index % 2 === 0;
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 md:p-8 gap-[20px] md:gap-[98px] ${
        isReverse ? " md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1 bg-[#F4F4F4] w-full flex items-center justify-center rounded-md p-4 ">
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
          className="h-full w-full"
          layout="responsive"
        />
      </div>
      <div className="flex-1 text-center md:text-start ">
        <p className="font-bold text-[32px] md:text-[48px]">{title}</p>
        <p className=" text-[16px] md:text-[18px] ">{text}</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center py-0 md:py-10 w-full">
        <div className="text-primary">
          <p className="text-base uppercase">Services</p>
          <hr className="my-2 h-1 bg-primary" />
          <p className="text-2xl md:text-5xl font-bold uppercase">
            Business Consulting
          </p>
        </div>
        <Image
          src={"/images/business_consulting.png"}
          width={500}
          height={500}
          className="w-full md:w-[70%] mt-8"
          alt="digital transformation"
        />
      </div>

      <div className=" flex flex-col gap-6 items-center justify-center py-0 md:py-10 w-full md:w-[50%]">
        <div className="border-t-primary border-b-primary border-t-2 border-b-2 p-4 md:p-6 ">
          <p className="text-xl font-bold text-justify md:text-start ">
            Combining more traditional approaches to service operations such as
            ITIL with more iterative approaches such as properly empowered
            WebOps and flexible provisioning and service platforms, our teams
            continually look for the most appropriate and efficient approach to
            providing operational services. Across our clients, we have
            experience of designing and implementing efficient and repeatable
            Incident management, request fulfilment, problem management,
            application management and IT operations control capabilities.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12">
        <div className="w-full md:w-[80%] ">
          {section_data.map((item, index) => (
            <Section
              key={item?.title}
              title={item?.title}
              text={item?.text}
              image={item?.image}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="my-5 md:my-10 w-full" />
      <Contact />
      {/* </div> */}
    </div>
  );
};

export default page;
