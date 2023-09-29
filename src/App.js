import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import TopicDetails from "./pages/TopicDetails";

function App() {
  return (
    <BrowserRouter basename="/TAP">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details" element={<TopicDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
