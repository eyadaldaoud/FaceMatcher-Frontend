import { BiMoon, BiSolidDonateHeart, BiSun } from "react-icons/bi";
import {
  AcordinType,
  Langtype,
  ListItems,
  contactsType,
  navigation,
  themeType,
} from "./Types";
import { BsGithub, BsLaptop, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export const themeItems: themeType[] = [
  {
    name: "Dark",
    themeType: "dark",
    icon: <BiMoon className="ml-auto text-lg" />,
  },
  {
    name: "Light",
    themeType: "light",

    icon: <BiSun className="ml-auto text-lg" />,
  },
  {
    name: "System",
    themeType: "system",

    icon: <BsLaptop className="ml-auto text-lg" />,
  },
];

export const navItems: navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const conatcts: contactsType[] = [
  {
    name: "Github",
    link: "https://github.com/UGoingNoWhereBoy",
    icon: <BsGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/eyad-zoubi-93327b244/",
    icon: <BsLinkedin />,
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/UGoingNoWhereBoy/",
    icon: <FaFacebook />,
  },
  { name: "Portfolio", link: "https://eyad.vercel.app/", icon: <SiVercel /> },
];
