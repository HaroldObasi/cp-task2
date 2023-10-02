import React from "react";
import FilterSection from "./FilterSection";
import CandidateSection from "./CandidateSection";
type Props = {};

const MainBody = (props: Props) => {
  return (
    <div className="flex flex-col xl:flex-row gap-x-8">
      <FilterSection />
      <CandidateSection />
    </div>
  );
};

export default MainBody;
