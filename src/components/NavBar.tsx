// d:/Projects/code/novels-syiemlieh/src/components/NavBar.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { Twirl as Hamburger } from "hamburger-react";
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

interface NavbarProps {
  className?: string;
}

const NavBar = ({ className }: NavbarProps) => {
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
      <div>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          height={"0"}
          className={`lg:hidden justify-between bg-transparent overflow-hidden  ${className}`}>
          <NavbarMenu className="overflow-hidden bg-[#B0A596]">
            <NavbarMenuItem>
              <li
                className="sm:mt-0 mt-[19px] flex flex-col justify-center items-center cursor-pointer"
                onClick={handleHomeClick}>
                <div className="flex flex-col items-center text-[#5A4B2E]">
                  <div className="flex flex-col items-end">
                    <span className="logo-title text-6xl sm:text-7xl ">
                      ashley
                    </span>
                    <span className="logo-title text-6xl sm:text-7xl -mt-5 sm:-mt-6">
                      smith
                    </span>
                  </div>
                  <div className="logo-title text-[0.6rem] sm:-mt-[1.2rem] -mt-3 sm:text-base tracking-widest font-bold  ">
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
            <div className="w-full sm:mt-12  navbar flex lg:flex-row flex-col px-16 items-center justify-center relative  p-3 work-sans-light text-[12px] text-[#5A4B2E]">
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
              </div>{" "}
              <div className=" lg:flex overflow-hidden mx-auto px-8 py-6 sm:py-6">
                <li
                  className=" sm:mt-0 mt-0  flex flex-col justify-center items-center cursor-pointer"
                  onClick={handleHomeClick}>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-end">
                      <span className="logo-title text-6xl sm:text-7xl">
                        ashley
                      </span>
                      <span className="logo-title text-6xl sm:text-7xl -mt-5 sm:-mt-6">
                        smith
                      </span>
                    </div>
                    <div className="logo-title text-[0.6rem] sm:-mt-[1.2rem] -mt-1 sm:text-base tracking-widest font-bold  ">
                      PHOTOGRAPHY
                    </div>
                  </div>
                </li>{" "}
              </div>
              <div className=" sm:hidden h-px bg-black w-full mt-2 mb-"></div>
              <div className="sm:hidden z-50 absolute right-4">
                <Hamburger
                  direction="right"
                  toggled={isMenuOpen}
                  toggle={setIsMenuOpen}
                />
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
      </div>
    </>
  );
};

export default NavBar;
