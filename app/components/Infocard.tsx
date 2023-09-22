import { Link } from "@nextui-org/react";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { DiPython } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import { SiNumpy } from "react-icons/si";
import { rowdies } from "./utils/Fonts";
const Infocard = () => {
  return (
    <div>
      <h1 className={`${rowdies.className} text-center capitalize`}>
        Made with
      </h1>
      <div className="text-5xl flex justify-center">
        <TbBrandNextjs />
        <DiPython className="ml-3 mr-3" />
        <BiLogoFlask />
        <SiNumpy className="text-4xl mt-auto mb-auto ml-2" />
      </div>

      <Link
        className="mr-auto ml-auto"
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </div>
  );
};

export default Infocard;
