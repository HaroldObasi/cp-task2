import Header from "./Header";
import MainBody from "./MainBody";

type Props = {};

function MainContent({}: Props) {
  return (
    <div className="bg-[#F9FAFF] flex-1 overflow-auto px-3 sm:px-[32px] max-w-7xl mx-auto">
      <Header />
      <MainBody />
    </div>
  );
}

export default MainContent;
