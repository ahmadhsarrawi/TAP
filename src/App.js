import "./App.css";
import SearchSection from "./components/SearchSection";
import Header from "./layout/Header";
import MainLayout from "./layout/MainLayout";
import NumberOfTopics from "./layout/NumberOfTopics";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <SearchSection />
        <NumberOfTopics/>
      </MainLayout>
    </>
  );
}

export default App;
