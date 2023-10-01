import React from "react";
import Dropdown from "../ui/Dropdown";
import HeaderButtonGroup from "./HeaderButtonGroup";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between py-[32px]">
      <div>
        <p className="text-[20px] font-semibold text-[#1D4ED8]">
          London Internship Program
        </p>
        <p className="font-light text-[12px]">London</p>
      </div>
      <HeaderButtonGroup />

      <Dropdown />
    </div>
  );
};

export default Header;
