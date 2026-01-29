import { Routes, Route } from "react-router-dom";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/CallMe" element={<Contacts />} />
      </Routes>
    </>
  );
}
export default App;
