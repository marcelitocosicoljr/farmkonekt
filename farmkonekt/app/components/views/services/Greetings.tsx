import React from "react";

const Greetings = () => {
  return (
    <div className="w-full bg-fk-white rounded-2xl text-center lg:text-left min-h-[230px] lg:px-10 py-8 lg:py-0 flex flex-col lg:flex-row items-center ">
      <img src="/assets/images/hi.png" className="h-[200px] object-contain " />
      <div className="flex flex-col lg:max-w-[80%] px-6 gap-2">
        <p className="text-fk-green text-2xl  font-semibold">
          Hello, Welcome back John!
        </p>
        <p className="text-[16px]  text-fk-grey  font-light">
          Let{"'"}s make the most of your day with <br /> Farmkonekt online
          services!
        </p>
      </div>
    </div>
  );
};

export default Greetings;
