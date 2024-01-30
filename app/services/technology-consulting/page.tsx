import Accordion from "@/Components/UI/Accordion";
import Contact from "@/Components/UI/Contact";
import Image from "next/image";
import React from "react";

const accordion_data = [
  {
    title: "ARCHITECTURE ",
    detail:
      "Whether our architects are working as trusted advisors to our clients or embedded in their teams, we deeply immerse ourselves into technical challenges to ensure delivery of the desired outcome. Working at the enterprise level setting, direction and strategy or at the solution/ technology level ensuring that business needs will be met by the proposed platform, we leverage our knowledge and experience to accelerate delivery times and maximise benefits, while reducing and managing risk.",
  },
  {
    title: "DEVELOPMENT ",
    detail:
      "We provide complete end to solution services for your business needs. We can create proof concepts and set up a cloud based deployment workstream with continuous integration. Our experts can also help you move your existing application into your own private cloud servers. We can work along with your existing team and perform code reviews and provide mentoring.",
  },
  {
    title: "TESTING AND QUALITY ASSURANCE ",
    detail:
      "Our quality analysts work with businesses to define test scenarios and test cases for the evolving solutions and with the developers to implement the majority of these as automated tests.",
  },
  {
    title: "CYBER SECURITY ",
    detail:
      "With the move to more open and connected systems, and as organisations look to leverage services such as Cloud Hosting to allow them to deliver more efficiently, Cyber Security and the need to understand and mitigate the risks to an organisation’s systems and information is critical. Many of our clients have been moving away from formal accreditation of their systems and instead are managing their own Risk Assessments and self-assuring through Security Architecture patterns and techniques, identifying and implementing appropriate people, process and technical controls and by using validation techniques such as penetration testing.",
  },
];

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center py-0 md:py-10 w-full">
        <div className="text-primary">
          <p className="text-base uppercase">Services</p>
          <hr className="my-2 h-1 bg-primary" />
          <p className="text-2xl md:text-5xl font-bold uppercase">
            Technology Consulting
          </p>
        </div>
        <Image
          src={"/images/technology_consulting.png"}
          width={500}
          height={500}
          className="w-full md:w-[70%] mt-8"
          alt="digital transformation"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-12 px-4">
        <div className="w-full md:w-[90%]">
          {accordion_data.map((item) => (
            <Accordion
              key={item.title}
              title={item?.title}
              detail={item?.detail}
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
