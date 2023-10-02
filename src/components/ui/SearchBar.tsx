import React from "react";
import searchIcon from "../../assets/mainBody/Search_Magnifying_Glass.svg";
import warningIcon from "../../assets/mainBody/Circle_Warning.svg";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="w-full relative">
      <div className="absolute flex items-center pl-4 h-full">
        <img src={searchIcon} className="" alt="Search icon" />
      </div>
      <div className="absolute hidden right-0 h-full sm:flex items-center pr-4">
        <img src={warningIcon} alt="Warning icon" />
      </div>
      <input
        type="text"
        name=""
        placeholder="Search by name, edu, exp or #tag"
        className="w-full pl-[50px] text-xs focus:ring-0 focus:outline-none py-4 rounded-lg"
        id=""
      />
    </div>
  );
};

export default SearchBar;
