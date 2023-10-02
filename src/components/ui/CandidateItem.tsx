import React from "react";
import video from "../../assets/mainBody/video.svg";
import notebook from "../../assets/mainBody/Notebook.png";
import { Candidate } from "../layout/CandidateSection";

type Props = {
  data: Candidate;
  index: number;
};

const CandidateItem = (props: Props) => {
  return (
    <div className="flex gap-x-6 items-center">
      <div>
        <input type="checkbox" name="" id="" />
      </div>

      <div className="flex my-4 gap-x-6 items-center w-full">
        <p className="text-xl w-[56px] h-[56px] flex items-center justify-center rounded-full bg-[#EDF4FF] text-[#D0E1FF]">{`${
          props.data.firstName[0] + props.data.lastName[0]
        }`}</p>

        <div className="flex flex-col gap-y-2 w-full">
          <div className="flex justify-between w-full">
            <p className="text-[18px] font-semibold">{`${props.data.firstName}  ${props.data.lastName}`}</p>
            <img src={video} alt="video icom" />
          </div>
          <p className="text-[14px]">{props.data.location}</p>
          <p className="text-[14px]"> {props.data.education}</p>
          <div className="flex gap-x-2 text-[#1D4ED8]">
            {props.data.hashTags.map((item, index) => (
              <p className="text-[12px]" key={index}>
                #{item}
              </p>
            ))}
          </div>
          <div className="flex gap-x-2">
            {props.data.chipTags.map((item, index) => (
              <p
                className="text-[12px] text-[#037092] bg-[#F3FAFC] py-[2px] px-[10px] rounded-2xl"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateItem;
