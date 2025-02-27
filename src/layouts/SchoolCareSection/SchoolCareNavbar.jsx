import { useState } from "react";
import { Link } from "react-router-dom";
import successfultraitpartnerpdf from './Downloadable -Highly Successsful School Support Partners.pdf';

const SchoolCareNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gold shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black text-3xl md:hidden focus:outline-none ml-auto"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Nav Links */}
      <ul
        className={`flex flex-col items-center md:flex-row md:justify-center md:space-x-5 bg-blue-600 md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <li>
          <a href="#hero" className="text-navy-700 hover:text-white block py-2">
            Home
          </a>
        </li>
        <li>
          <a href="#territories" className="text-navy-700 hover:text-white block py-2">
            Available Territories
          </a>
        </li>
        <li>
          <a 
            className="text-navy-700 hover:text-white block py-2"
            download='Top 10 Traits of Highly Successful School Support Business Owners.pdf'
            href={successfultraitpartnerpdf}
            >
            Download PDF
          </a>
        </li>
        <li>
          <Link to="/schoolgrowthsystem/trenova" className="text-navy-700 hover:text-white block py-2">
            School Growth System
          </Link>
        </li>
        <li>
          <a href="#getintouch1" className="text-navy-700 hover:text-white block py-2">
            Get In Touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SchoolCareNavbar;
