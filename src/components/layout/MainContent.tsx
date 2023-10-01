import Header from "./Header";
import MainBody from "./MainBody";

type Props = {};

function MainContent({}: Props) {
  return (
    <div className="bg-[#F9FAFF] flex-1 overflow-auto px-[32px]">
      <Header />
      <MainBody />
    </div>
  );
}

export default MainContent;
