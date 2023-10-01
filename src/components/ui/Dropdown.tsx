import { useState } from "react";
import arrowDown from "../../assets/header/Caret_Down_MD.svg";

type Props = {};

function Dropdown({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownData = [
    {
      name: "Applied",
      value: 1745,
    },
    {
      name: "Shortlisted",
      value: 453,
    },
    {
      name: "Technical Interview",
      value: 123,
    },
    {
      name: "Video Interview I",
      value: 25,
    },
    {
      name: "Video Interview II",
      value: 25,
    },
    {
      name: "Video Interview III",
      value: 25,
    },
    {
      name: "Offer",
      value: 25,
    },
    {
      name: "Withdrawn",
      value: 25,
    },
  ];
  return (
    <div className="z-10 w-[320px] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-white focus:bg-sky-50 active:bg-sky-50 px-[16px] py-[8px] w-[320px] rounded-[16px] flex justify-between shadow text-[16px] font-medium"
      >
        <p className="text-[#1D4ED8]">Opportunity Browsing</p>
        <img src={arrowDown} alt="dropdown arrow" />
      </button>
      {isOpen && (
        <div className="w-[320px]  max-h-[100px] absolute">
          {dropdownData.map((item, index, arr) => (
            <button
              className={`${
                index !== arr.length - 1 && "border-b"
              } bg-white px-[16px] py-[30px] flex w-full justify-between hover:bg-[#D1DDFF] hover:text-[#1D4ED8]`}
            >
              <p>{item.name}</p>
              <p>{item.value}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
