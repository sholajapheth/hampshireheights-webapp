import React from "react";

const Contact = () => {
  return (
 
      <div className="bg-secondary border-primary border-b-8 w-full px-8 py-4 md:px-16 md:py-8 md:w-[70%] lg:w-[60%] flex md:flex-row flex-col items-center  ">
        <div>
          <p className="font-semibold">QUICK MESSAGE</p>
          <p className="font-extrabold text-3xl mt-4 w-full md:w-[60%] lg:w-[50%]">
            Send us your quick message and we'll get back to you
          </p>
        </div>
       <div>
       <button className="bg-white  mt-8   py-4 font-bold text-primary hover:scale-105 transition-all duration-300 px-6 " style={{ whiteSpace: 'nowrap'}}>
        <p>CONTACT US</p>
       </button>
       </div>
      </div>
    
  );
};

export default Contact;
