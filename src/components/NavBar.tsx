"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

const NavBar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };
  const menuItems = [
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "INFORMATION", href: "#info" },
    { label: "ABOUT ME", href: "/about-me" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="lg:hidden flex bg-transparent h-0">
        <NavbarContent className="sm:hidden relative" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="absolute top-[65px] right-5 "
          />
        </NavbarContent>

        <NavbarMenu className="-mt-16 bg-[#B0A596]  ">
          <NavbarMenuItem>
            <li
              className="sm:mt-20 mt-6 text-3xl flex flex-col justify-center items-center cursor-pointer mx-auto text-[#5A4B2E]"
              onClick={handleHomeClick}>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-end">
                  <span className="logo-title text-4xl sm:text-8xl">
                    ashley
                  </span>
                  <span className="logo-title text-4xl sm:text-8xl -mt-4 sm:-mt-8">
                    smith
                  </span>
                </div>
                <div className="logo-title text-[0.6rem] -mt-[1.2rem] sm:text-lg tracking-widest font-bold">
                  PHOTOGRAPHY
                </div>
              </div>
            </li>
            <div className="h-px bg-gray-300 w-full mt-4 mb-2"></div>
          </NavbarMenuItem>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.label}-${index}`}
              className="justify-center items-center flex flex-col text-white">
              <Link className="" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <nav>
        <ul className="flex">
          <div className="w-full sm:mt-12  navbar flex  px-16 items-center  flex-row p-3 work-sans-light text-[12px] text-[#5A4B2E]">
            <div className="hidden lg:flex mx-10 ">
              <Menu setActive={setActive}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="PORTFOLIO">
                  <div className="flex flex-col w-full text-[10px] text-[#F1EBE4] ">
                    <div className="mb-6">
                      <HoveredLink href="/weddings">Weddings</HoveredLink>
                    </div>
                    <HoveredLink href="/couples" className="mt-6">
                      Couples
                    </HoveredLink>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <div className="hidden lg:flex mx-10 ">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="INFO">
                  <div className="flex flex-col text-[10px] text-[#F1EBE4] items-center">
                    <div className="">
                      <div>
                        <HoveredLink href="/investment">Pricing</HoveredLink>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div>
                        <HoveredLink href="/travel">Travel</HoveredLink>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div>
                        <HoveredLink href="/wedding-guides">
                          Elopement Guides
                        </HoveredLink>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div>
                        <HoveredLink href="/shop">Shop</HoveredLink>
                      </div>
                    </div>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <div className="hidden lg:flex mx-auto px-8 py-6">
              <li
                className=" sm:mt-0 mt-6  flex flex-col justify-center items-center cursor-pointer"
                onClick={handleHomeClick}>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-end">
                    <span className="logo-title text-4xl sm:text-7xl">
                      ashley
                    </span>
                    <span className="logo-title text-4xl sm:text-7xl -mt-4 sm:-mt-6">
                      smith
                    </span>
                  </div>
                  <div className="logo-title text-[0.6rem] -mt-[1.2rem] sm:text-base tracking-widest font-bold  ">
                    PHOTOGRAPHY
                  </div>
                </div>
              </li>
            </div>
            <div className="hidden lg:flex mx-10 px-8 py-6">
              <li>
                <Link href="/about-me">ABOUT ME</Link>
              </li>
            </div>
            <div className="hidden lg:flex mx-10 px-8 py-6">
              <li className="">
                <Link href="/contact">CONTACT</Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
