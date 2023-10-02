import React from "react";
import CandidateItem from "../ui/CandidateItem";

type Props = {};

export type Candidate = {
  firstName: string;
  lastName: string;
  location: string;
  education: string;
  hashTags: string[];
  chipTags: string[];
  videos?: number;
  programs?: number;
};

const candidateList: Candidate[] = [
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
    programs: 3,
    videos: 4,
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
  {
    firstName: "Aaliyah",
    lastName: "Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    chipTags: ["New York", "Marketing", "London"],
  },
];

const CandidateSection = (props: Props) => {
  return (
    <div className="flex-1 bg-white px-4 py-2 rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between border-b">
        <div className="flex gap-x-8 py-4 items-center">
          <input type="checkbox" name="" id="" />
          <p className="text-[#1D4ED8] text-sm font-semibold">247 Candidates</p>
        </div>

        <div className="py-4 flex ">
          <div className="border-r flex items-center border-[#F3F3F4] pr-4">
            <p className="text-[#1D4ED8] text-sm">Qualified</p>
          </div>
          <div className="flex items-center gap-x-2 px-4 border-r border-[#F3F3F4]">
            <p className="text-sm">Task</p>
            <p className="text-[#22215B] w-[25px] h-[25px] flex justify-center text-[10px] items-center bg-[#F7F8FD] rounded-full">
              25
            </p>
          </div>
          <div className="flex items-center gap-x-2 pl-4">
            <p className="text-sm">Disqualified</p>
            <p className="text-[#22215B] w-[25px] h-[25px] flex justify-center text-[10px] items-center bg-[#F7F8FD] rounded-full">
              78
            </p>
          </div>
        </div>
      </div>

      {candidateList.map((item, index, arr) => (
        <CandidateItem data={item} index={index} />
      ))}
    </div>
  );
};

export default CandidateSection;
