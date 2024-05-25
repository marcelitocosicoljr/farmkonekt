import Link from "next/link";
import React from "react";

const Services = () => {
  const services = [
    {
      name: "Procurement",
      image: "/assets/images/procurement.png",
      link: "/",
    },
    {
      name: "Cluster Management",
      image: "/assets/images/team.png",
      link: "/",
    },
    {
      name: "Supplier Portal",
      image: "/assets/images/supplier.png",
      link: "/",
    },
    {
      name: "Mobile Apps",
      image: "/assets/images/mobile-app.png",
      link: "/",
    },
    {
      name: "Farmkonekt Website",
      image: "/assets/images/ux.png",
      link: "/",
    },
  ];
  return (
    <div className="w-full ">
      <p className="text-2xl font-bold mb-6">Services</p>
      <div className=" w-full flex flex-wrap gap-6 ">
        {services.map((service: any, index: number) => (
          <Link href={service.link} key={index}>
            <button
              className="w-[180px] h-[170px] p-4 bg-fk-white rounded-lg flex flex-col justify-center items-center gap-4
        hover:scale-105 duration-150 hover:bg-[#F5F5F6] hover:text-fk-green hover:shadow-xl"
            >
              <img
                src={service.image}
                className="h-[90px] w-auto object-contain mx-auto"
              />
              <p className="font-semibold text-md text-center ">
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
