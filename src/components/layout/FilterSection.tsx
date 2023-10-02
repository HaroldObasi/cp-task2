import SearchBar from "../ui/SearchBar";
import FilterOptions from "./FilterOptions";

const FilterSection = () => {
  return (
    <div className="w-full xl:w-[385px] xl:space-y-8 space-y-3 xl:sticky self-start xl:top-28 mb-4 xl:mb-0">
      <SearchBar />
      <FilterOptions />
    </div>
  );
};

export default FilterSection;
