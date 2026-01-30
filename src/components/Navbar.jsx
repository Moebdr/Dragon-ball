import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  // 1. Fixed the typo "tru" to "false" (closed by default)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-3 text-white bg-gray-950 relative lg:h-15">
      {/* 2. Added an onClick to toggle the menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden block z-50 relative mx-auto text-2xl cursor-pointer"
      >
        {!isOpen ? (
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 
       5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
              fill="currentColor"
            ></path>
            <path
              d="M4 18C4 17.4477 4.44772 17 5 
       17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772
        19 4 18.5523 4 18Z"
              fill="currentColor"
            ></path>
            <path
              d="M5 11C4.44772 11 4 
        11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14
         11.4477 13.5523 11 13 11H5Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>)}
      </button>

      {/* 3. Conditional classes to show/hide the menu on mobile */}
      <div
        className={`
        ${isOpen ? "flex" : "hidden"} 
        flex-col gap-5 justify-center items-center absolute w-full top-12 left-0 bg-gray-950 p-5 
        md:static md:flex md:flex-row md:p-0 md:top-0 md:show
      `}
      >
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/aboutMe" className="font-bold">
          About
        </Link>
        <Link to="/CallMe" className="font-bold">
          Contacts
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
