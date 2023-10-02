import FilterSection from "./FilterSection";
import CandidateSection from "./CandidateSection";

const MainBody = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-x-8">
      <FilterSection />
      <CandidateSection />
    </div>
  );
};

export default MainBody;
