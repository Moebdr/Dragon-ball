import { Routes, Route } from "react-router-dom";
import About from "./sections/About";
import Favorites from "./sections/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/MyFavorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
export default App;
