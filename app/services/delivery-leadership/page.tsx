import Accordion from "@/Components/UI/Accordion";
import Contact from "@/Components/UI/Contact";
import Image from "next/image";
import React from "react";

const accordion_data = [
  {
    title: "PROGRAMME MANAGEMENT ",
    detail:
      "Delivering a complex programme of work usually starts with a vision of a changed organisation and the benefits that will accrue from the change. Importantly, those benefits are greater than the simple sum of benefits delivered by the individual projects with the programme itself having value. Our Programme Managers have experience of taking large-scale multi year/multi layer programmes from blueprinting right through to delivery with key skills focused around project coordination, benefits management and stakeholder management and communication.",
  },
  {
    title: "AGILE COACHING ",
    detail:
      "Delivering complex projects and programmes using Agile isne&lsquo;t always plain sailing. Our Agile Coaches have a deep understanding of a range of different agile and lean approaches, are experienced in embedding agile tools and techniques and have specific skills and experience in supporting scaled agile. They push decision making to the right level within the teams, not allowing unnecessary bureaucracy and structure to suppress innovation and delivery but are also agile pragmatists and help our customers align agile best practice with elements of waterfall where necessary.",
  },
  {
    title: "PROGRAMME MANAGEMENT ",
    detail:
      "Our Project Managers take great pride in delivering projects for our clients to time, budget and to quality. Understanding the interrelationships between each of these dimensions is key to ensuring the project delivers and is seen as a success by all of its stakeholders. Our Project Managers have deep experience of leading projects through requirements capture, preparing a business case to justify investment through to developing and implementing the managing plan for the project. They are experts in leading and motivating the project delivery team, managing the risks, issues and changes on the project and monitoring progress against plan and budget whilst maintaining communications with stakeholders.",
  },
  {
    title: "SCRUM MASTERS ",
    detail:
      "Our Scrum Masters efficiently set up an agile environment for teams to build and iterate a user-centred digital service, work to remove obstacles or ‘blockers’ to progress and help their teams become better at prioritising and organising their own work. They have deep experience in establishing an appropriate physical environment, favouring co-location where possible with sufficient shared workspace and walls for teams to communicate openly and effectively, combined with experience in the best technical tools such as instant messaging and collaboration.",
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
            Delivery Leadership
          </p>
        </div>
        <Image
          src={"/images/delivery_leadership.png"}
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
