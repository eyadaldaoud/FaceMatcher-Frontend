"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Progress,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Theme } from "./utils/Theme";
import { navItems } from "./utils/Lists";
import React from "react";
import { FaDrupal } from "react-icons/fa";
import { TbFaceId } from "react-icons/tb";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<any>(false);
  const path = usePathname();
  return (
    <Navbar
      disableAnimation
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand>
        <TbFaceId />
        <p className="font-bold text-inherit">FaceMatcher</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={path === item.href ? "text-purple-600" : ""}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <div className="sm:block hidden">
          <Theme />
        </div>
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={path === item.href ? "text-purple-600" : ""}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <Theme />
      </NavbarMenu>
    </Navbar>
  );
}
