import calendarCheck from "../../assets/sidebar/Calendar_Check.svg";
import chevronRight from "../../assets/sidebar/Chevron_Right_MD.svg";
import fileDocument from "../../assets/sidebar/File_Document.svg";
import heart from "../../assets/sidebar/Heart_01.svg";
import house from "../../assets/sidebar/House_01.svg";
import notebook from "../../assets/sidebar/Notebook.svg";
import settings from "../../assets/sidebar/Settings.svg";
import shareAndroid from "../../assets/sidebar/Chevron_Right_MD.svg";
import usersGroup from "../../assets/sidebar/Share_Android.svg";

type Props = {};

const Sidebar = (props: Props) => {
  const options = [
    { icon: house },
    { icon: usersGroup },
    {
      icon: calendarCheck,
    },
    {
      icon: chevronRight,
    },
    { icon: fileDocument },
    { icon: heart },
    { icon: notebook },
    { icon: settings },
    { icon: shareAndroid },
  ];

  return (
    <div className="w-[72px] bg-white h-screen flex flex-col items-center overflow-y-auto">
      <div className="bg-[#D9D9D9] w-[48px] h-[48px] rounded-full my-[32px]">
        {" "}
      </div>

      <div>
        <div className="flex flex-col">
          {options.map((item, index) => (
            <button
              className={`${
                index === 0 && "bg-[#E9EFFF]"
              } hover:bg-[#E9EFFF] p-[12px] rounded-lg mb-[24px]`}
              key={index}
            >
              <img src={item.icon} alt="Sidemenu option" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
