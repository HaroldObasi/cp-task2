import React from "react";
import mail from "../../assets/header/Mail.svg";
import priceTag from "../../assets/header/priceTag.svg";
import userCheck from "../../assets/header/User_Check.svg";
import userClose from "../../assets/header/User_Close.svg";
import userVoice from "../../assets/header/User_Voice.svg";
import expandMore from "../../assets/header/expand_more.svg";

type Props = {};

const HeaderButtonGroup = (props: Props) => {
  const buttonData = [
    {
      icon: priceTag,
    },
    {
      icon: userClose,
    },
    {
      icon: userCheck,
    },
    {
      icon: userVoice,
    },
    {
      icon: mail,
    },
  ];
  return (
    <div className="flex sm:flex-row sm:gap-y-0 flex-col gap-y-3 mt-4 xl:my-0">
      <div className="flex gap-x-2 sm:border-r pr-2 mr-2">
        {buttonData.map((item, index) => (
          <button className="p-[8px] border-[0.5px] border-[#ECECEC] bg-white rounded-lg">
            <img src={item.icon} alt="Header button option" />
          </button>
        ))}
      </div>
      <button className="bg-[#1D5ECD] h-12 rounded-[8px] text-white flex items-center justify-between">
        <p className="px-[16px]  h-full flex items-center">
          Move to Video Interview I
        </p>
        <div className="border-l px-[10px] flex items-center h-full">
          <img className=" " src={expandMore} alt="" />
        </div>
      </button>
    </div>
  );
};

export default HeaderButtonGroup;
