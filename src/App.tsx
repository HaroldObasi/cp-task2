import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import "./App.css";

function App() {
  return (
    <main className="flex flex-row min-h-screen w-full max-h-screen">
      <Sidebar />
      <MainContent />
    </main>
  );
}

export default App;
