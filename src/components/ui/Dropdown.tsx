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
    <div className="z-10 w-full sm:w-[320px] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative mb-2 w-full bg-white focus:bg-sky-50 active:bg-sky-50 px-[16px] py-[8px] flex justify-between shadow text-[16px] font-medium ${
          isOpen ? "rounded-t-[16px]" : "rounded-[16px]"
        }`}
      >
        <p className="text-[#1D4ED8]">Opportunity Browsing</p>
        <img src={arrowDown} alt="dropdown arrow" />
      </button>
      {isOpen && (
        <div className="w-full max-h-[100px] absolute">
          {dropdownData.map((item, index, arr) => (
            <button
              className={`${
                index !== arr.length - 1 && "border-b"
              } bg-white px-[16px] py-[30px] group flex w-full sm:w-[320px] justify-between hover:bg-[#D1DDFF] hover:text-[#1D4ED8]`}
            >
              <p>{item.name}</p>
              <p className="bg-[#F8F8F8] group-hover:text-[#1D4ED8] group-hover:bg-[#D1DDFF] rounded-2xl px-[10px]">
                {item.value}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
