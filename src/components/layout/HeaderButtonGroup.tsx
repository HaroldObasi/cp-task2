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
    <div className="flex">
      <div className="flex gap-x-2 border-r pr-2 mr-2">
        {buttonData.map((item, index) => (
          <button className="p-[8px] bg-white rounded-lg">
            <img src={item.icon} alt="Header button option" />
          </button>
        ))}
      </div>
      <button className="bg-[#1D5ECD] rounded-[8px] text-white flex items-center justify-between">
        <p className="px-[16px] border-r h-full flex items-center">
          Move to Video Interview I
        </p>
        <img className="px-[10px]" src={expandMore} alt="" />
      </button>
    </div>
  );
};

export default HeaderButtonGroup;
