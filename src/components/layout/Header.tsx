import Dropdown from "../ui/Dropdown";
import HeaderButtonGroup from "./HeaderButtonGroup";

const Header = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between py-[32px] sticky top-0 z-10 bg-[#F9FAFF]">
      <div className="pb-4 xl:pb-0">
        <p className="text-[20px] font-semibold  text-[#1D4ED8]">
          London Internship Program
        </p>
        <p className="font-light text-[12px]">London</p>
      </div>

      <Dropdown />
      <HeaderButtonGroup />
    </div>
  );
};

export default Header;
