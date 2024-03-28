import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center p-5 bg-emerald-500 w-screen h-16 fixed">
      <Link to="/" className="flex items-center text-white text-xl mr-5">
        <img src={logo} alt="Logo" className="mr-2 h-16 w-16" /> 
        <span className="hidden sm:block">Green Flag</span>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="/docs" className="text-white">
            Docs
          </Link>
        </li>
        <li>
          <Link to="/tools" className="text-white">
            Tools
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}