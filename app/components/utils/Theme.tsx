import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import { themeItems } from "./Lists";
export const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className=" flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded w-12 h-5" />
        </div>
        <div className="w-full flex flex-col gap-2"></div>
      </div>
    );
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color={"secondary"} variant={"light"} className="capitalize">
          {theme}
          {theme === "dark" ? (
            <BiMoon />
          ) : theme === "system" ? (
            <BsLaptop />
          ) : (
            <BiSun />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color={"secondary"}
        variant={"bordered"}
      >
        {themeItems.map((item, index) => (
          <DropdownItem
            key={index}
            textValue={item.name}
            onClick={() => setTheme(item.themeType)}
          >
            <div className="flex">
              <span>{item.name} Mode</span> {item.icon}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
