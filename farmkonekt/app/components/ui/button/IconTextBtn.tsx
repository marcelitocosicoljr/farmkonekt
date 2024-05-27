"use client";
import React from "react";
import { Icon } from "@iconify/react";

const IconTextBtn = ({ name, icon, className, onPress }: any) => {
  return (
    <button
      onClick={onPress}
      className={`flex items-center gap-2 text-[12px] hover:text-fk-green cursor-pointer ${className} `}
    >
      <Icon icon={icon} width={16} />
      {name}
    </button>
  );
};

export default IconTextBtn;
