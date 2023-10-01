import Header from "./Header";

type Props = {};

function MainContent({}: Props) {
  return (
    <div className="bg-[#F9FAFF] flex-1 overflow-auto">
      <Header />
    </div>
  );
}

export default MainContent;
