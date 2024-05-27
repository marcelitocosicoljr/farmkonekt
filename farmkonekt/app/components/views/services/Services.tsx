import Link from "next/link";
import React from "react";

const Services = () => {
  const services = [
    {
      name: "FarmKonekt Purchaser",
      image: "/assets/images/procurement.png",
      link: "https://purchaser.farmkonek.com",
    },
    {
      name: "FarmKonekt Supplier",
      image: "/assets/images/supplier.png",
      link: "https://supplier.farmkonek.com/",
    },
    {
      name: "FarmKonekt Pre-enrollment",
      image: "/assets/images/enroll.png",
      link: " https://app.farmkonek.com/",
    },
    {
      name: "Cluster Management",
      image: "/assets/images/team.png",
      link: "https://crm.farmkonek.com/",
    },

    {
      name: "FarmKonekt Facebook ",
      image: "/assets/images/facebook.png",
      link: "https://www.facebook.com/FarmKonek",
    },
    {
      name: "Farmkonekt Website",
      image: "/assets/images/ux.png",
      link: "https://farmkonek.com/",
    },
  ];
  return (
    <div className="w-full ">
      <p className="text-2xl font-bold mb-6">Services</p>
      <div className=" w-full flex flex-wrap gap-4 lg:gap-6 ">
        {services.map((service: any, index: number) => (
          <Link href={service.link} key={index}>
            <button
              className="w-[155px] md:w-[180px] h-[170px] p-4 bg-fk-white rounded-lg flex flex-col justify-center items-center gap-4
        hover:scale-105 duration-150 hover:bg-[#F5F5F6] text-fk-black  hover:text-fk-green hover:shadow-xl"
            >
              <img
                src={service.image}
                className="h-[60px] lg:h-[80px] w-auto object-contain mx-auto"
              />
              <p className="font-semibold  text-md text-center ">
                {service.name}
              </p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
