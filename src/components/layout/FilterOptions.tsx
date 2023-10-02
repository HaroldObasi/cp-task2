import downArrow from "../../assets/mainBody/Caret_Down_MD.svg";
import file from "../../assets/mainBody/File_Document.svg";

type Options = {
  name: string;
  dropdown: boolean;
};

const FilterOptions = () => {
  const options: Options[] = [
    {
      name: "Personal Information",
      dropdown: true,
    },
    {
      name: "Education",
      dropdown: true,
    },
    {
      name: "Work Experience",
      dropdown: true,
    },
    {
      name: "Activity Filter",
      dropdown: true,
    },
    {
      name: "Advanced Filter",
      dropdown: false,
    },
  ];
  return (
    <div className="bg-white  rounded-lg ">
      <div className="w-full flex px-4 justify-between py-[18px] border-b border-[#F2F2F2]">
        <p className="text-sm font-medium">Filters</p>
        <p className="text-sm font-light">0 selected</p>
      </div>

      {options.map((item, index) => (
        <div
          className={`${
            index !== options.length - 1 && "border-b border-[#F2F2F2]"
          } px-4 py-[18px] flex justify-between`}
        >
          <div className="flex ">
            <img src={file} alt="File Icon" />

            <p className="text-sm ml-2">{item.name}</p>
          </div>
          {item.dropdown && <img src={downArrow} alt="Dropdown arrow" />}
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
