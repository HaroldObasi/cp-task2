import video from "../../assets/mainBody/video.svg";
import notebook from "../../assets/mainBody/Notebook.svg";
import { Candidate } from "../layout/CandidateSection";

type Props = {
  data: Candidate;
  index: number;
  lastIndex: boolean;
};

const CandidateItem = (props: Props) => {
  return (
    <div
      className={`flex gap-x-2 sm:gap-x-6 items-center  ${
        !props.lastIndex && "border-b"
      }`}
    >
      <div>
        <input type="checkbox" name="" id="" />
      </div>

      <div className="flex my-4 gap-x-6 items-center w-full">
        <p className="text-[15px] sm:text-xl w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] flex items-center justify-center rounded-full bg-[#EDF4FF] text-[#D0E1FF]">{`${
          props.data.firstName[0] + props.data.lastName[0]
        }`}</p>

        <div className="flex flex-col gap-y-1 sm:gap-y-2 w-full">
          <div className="flex justify-between w-full">
            <p className="text-sm sm:text-[18px] font-semibold">{`${props.data.firstName}  ${props.data.lastName}`}</p>
            <div className="flex gap-x-1">
              {props.data.videos && (
                <div className="flex gap-x-1 py-1 px-2 bg-[#F7F8FD] rounded-2xl">
                  <img src={video} alt="video icon" />
                  <p className="text-[#305DC6] text-[10px]">
                    {props.data.videos}
                  </p>
                </div>
              )}
              {props.data.videos && (
                <div className="flex gap-x-1 py-1 px-2 bg-[#F7F8FD] rounded-2xl">
                  <img src={notebook} alt="video icon" />
                  <p className="text-[#305DC6] text-[10px]">
                    {props.data.programs} Programs
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className="text-[10px] sm:text-[14px]">{props.data.location}</p>
          <p className="text-[10px] sm:text-[14px]"> {props.data.education}</p>
          <div className="flex flex-wrap gap-2 text-[#1D4ED8]">
            {props.data.hashTags.map((item, index) => (
              <p className="text-[8px] sm:text-[12px]" key={index}>
                #{item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 ">
            {props.data.chipTags.map((item, index) => (
              <p
                className="text-[8px] sm:text-[12px] text-[#037092] bg-[#F3FAFC] py-[2px] px-[10px] rounded-2xl"
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
