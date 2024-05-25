import React from "react";
import IconTextBtn from "../ui/button/IconTextBtn";
import NavigationLink from "../ui/navigationLink/NavigationLink";

const Sidebar = () => {
  return (
    <div className="w-[400px] bg-white px-5 flex flex-col justify-between">
      <div className="flex flex-col h-full w-full">
        <img
          src="/assets/images/fk.png"
          className="w-[150px] h-auto object-contain mt-4 mx-auto"
        />
        <div className="w-full flex flex-col h-full gap-3">
          <NavigationLink
            name="Farmkonekt Services"
            route="/"
            icon="fluent:apps-24-filled"
          />
          <NavigationLink
            name="Account Settings"
            route="/account-settings"
            icon="mdi:account-cog"
          />
          <div className="flex-1" />
          <NavigationLink
            name="Logout Account"
            route="/logout"
            icon="solar:logout-3-broken"
            className="mb-2"
          />
        </div>
      </div>
      <div className="border-t-[1px] border-t-color-grey py-6 w-full">
        <p className="text-[12px] text-fk-grey text-center">
          © 2024 FarmKonekt. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
