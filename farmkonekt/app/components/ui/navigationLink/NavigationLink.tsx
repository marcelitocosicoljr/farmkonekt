"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({
  name,
  route,
  icon,
  image,
  children,
  className,
}: any) => {
  const currentPath = usePathname();

  return (
    <Link href={route}>
      <div
        className={`flex items-center gap-4 pl-6  text-[14px]  cursor-pointer
        ${
          currentPath === route
            ? "border-l-0  bg-[#F5F5F6] rounded-md text-fk-green border-fk-green text-[14px] pl-5 py-3 font-[600] "
            : "border-0 rounded-sm py-3 text-fk-grey hover:text-fk-green hover:bg-[#FDFDFD]"
        } ${className} `}
      >
        <Icon icon={icon} width={18} />
        {name}
        {children}
      </div>
    </Link>
  );
};

export default NavigationLink;
