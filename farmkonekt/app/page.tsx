"use client";
import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import Greetings from "./components/views/services/Greetings";
import Services from "./components/views/services/Services";
import IconTextBtn from "./components/ui/button/IconTextBtn";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import NavigationLink from "./components/ui/navigationLink/NavigationLink";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <main className="flex min-h-screen gap-4 ">
      <Sidebar className="" />

      <div className="flex flex-col w-full px-4 lg:px-8 py-4 lg:pt-8 pb-5 gap-4 lg:gap-8">
        <div
          className={`w-full flex lg:hidden px-4 md:px-8 lg:px-24 items-center `}
        >
          <Link href="/">
            <img
              src="/assets/images/fk.png"
              className="w-[75px] md:w-[80px] h-auto object-contain"
            />
          </Link>
          <div className="flex flex-1" />

          <button
            onClick={() => setOpenNav(true)}
            className=" text-fk-green  z-10 hover:scale-110 transition-all hover:text-color-primaryHover"
          >
            <Icon
              icon="solar:hamburger-menu-broken"
              width={40}
              className="w-[35px]"
            />
          </button>
        </div>
        <Greetings />
        <Services />
        <div className="flex-1" />
        <div className="w-full justify-end flex gap-6 font-semibold text-fk-grey">
          <Link href="tel:+63 (48) 7173627" target="_blank">
            <IconTextBtn name="Call Us" icon="material-symbols:call" />
          </Link>
          <p className="text-grey text-sm"> | </p>
          <Link href="mailto:admin@farmkonekt.com" target="_blank">
            <IconTextBtn name="Contact Us" icon="ic:baseline-email" />
          </Link>
        </div>
        <div
          className={`${
            openNav
              ? "opacity-1 pointer-events-auto "
              : "opacity-0 pointer-events-none"
          } transition-all duration-150 w-full h-screen flex  bg-white fixed left-0 top-0  z-50 bg-color-white flex-col  justify-between `}
        >
          <div className=" flex flex-row  justify-between  pt-2 px-6  md:px-24">
            <img
              src="/assets/images/fk.png"
              className="w-[100px] md:w-[80px] h-auto object-contain"
            />
            <button onClick={() => setOpenNav(false)}>
              <Icon
                icon="line-md:close"
                width={40}
                className="w-[30px] text-fk-green hover:scale-110 transition-all hover:text-color-primaryHover"
              />
            </button>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="w-[90%] mx-auto flex flex-col h-full gap-3">
              <NavigationLink
                name="Farmkonekt Services"
                route="/"
                icon="fluent:apps-24-filled"
              />
              <NavigationLink
                name="Account Settings"
                route="#"
                icon="mdi:account-cog"
                className="pointer-events-none"
              />
              <div className="flex-1" />
              <NavigationLink
                name="Logout Account"
                route="https://purchaser.farmkonek.com"
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
          <div />
        </div>
      </div>
    </main>
  );
}
