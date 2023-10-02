import React, { useContext, useEffect, useState } from "react";
import CandidateItem from "../ui/CandidateItem";
import { SearchContext } from "../../search.context";

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
    firstName: "John",
    lastName: "Doe",
    location: "New York, USA",
    education: "Master - Harvard University (2022 - 2024)",
    hashTags: ["top_candidate", "coding"],
    chipTags: ["San Francisco", "Engineering", "Seattle"],
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    location: "London, UK",
    education: "Ph.D. - Oxford University (2021 - 2025)",
    hashTags: ["researcher", "data_analysis"],
    chipTags: ["Berlin", "Science", "Paris"],
  },

  {
    firstName: "Michael",
    lastName: "Smith",
    location: "Los Angeles, USA",
    education: "Bachelor - UCLA (2022 - 2022)",
    hashTags: ["new_grad", "finance"],
    chipTags: ["Chicago", "Business", "Boston"],
    programs: 3,
    videos: 4,
  },
  {
    firstName: "Sophia",
    lastName: "Williams",
    location: "Toronto, Canada",
    education: "Master - University of Toronto (2023 - 2025)",
    hashTags: ["tech_enthusiast", "AI"],
    chipTags: ["Vancouver", "Computer Science", "Montreal"],
  },
  {
    firstName: "Liam",
    lastName: "Anderson",
    location: "Chicago, USA",
    education: "Bachelor - University of Chicago (2022 - 2022)",
    hashTags: ["new_grad", "marketing"],
    chipTags: ["Los Angeles", "Advertising", "San Francisco"],
  },
  {
    firstName: "Olivia",
    lastName: "Martinez",
    location: "Madrid, Spain",
    education: "Master - Universidad Complutense de Madrid (2023 - 2025)",
    hashTags: ["student", "languages"],
    chipTags: ["Barcelona", "Education", "Valencia"],
  },
  {
    firstName: "Noah",
    lastName: "Garcia",
    location: "Sydney, Australia",
    education: "Ph.D. - University of Sydney (2021 - 2025)",
    hashTags: ["researcher", "biology"],
    chipTags: ["Melbourne", "Science", "Brisbane"],
  },
  {
    firstName: "Emma",
    lastName: "Davis",
    location: "Mumbai, India",
    education: "Bachelor - Mumbai University (2022 - 2022)",
    hashTags: ["fresh_grad", "programming"],
    chipTags: ["Delhi", "Technology", "Bangalore"],
  },
];

const CandidateSection = (props: Props) => {
  const { state } = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState<Candidate[]>([]);

  const handleFilter = () => {
    const filteredResults = candidateList.filter((item) => {
      const searchText = state.searchKey.toLowerCase();

      return (
        item.firstName.toLowerCase().includes(searchText) ||
        item.lastName.toLowerCase().includes(searchText) ||
        item.education.toLowerCase().includes(searchText) ||
        item.hashTags.some((tag) => tag.toLowerCase().includes(searchText))
      );
    });

    setSearchResults(filteredResults);
  };

  useEffect(() => {
    handleFilter();
  }, [state]);
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

      {searchResults.map((item, index, arr) => (
        <CandidateItem data={item} index={index} />
      ))}
    </div>
  );
};

export default CandidateSection;
