import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex gap-5 justify-center  p-3 text-white mx-auto bg-gray-950">
      <Link to="/" className="font-bold">Home</Link>
      <Link to="/aboutMe" className="font-bold">About</Link>
      <Link to="/CallMe" className="font-bold">Contacts</Link>
    </nav>
  );
}
export default Navbar;
