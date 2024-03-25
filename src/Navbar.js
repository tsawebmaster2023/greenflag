import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-emerald-400">
      <Link to="/" className="flex items-center text-white text-lg font-bold">
        <img src={logo} alt="Logo" className="mr-2 h-6 w-auto" /> 
        Green Flag Energy Solutions
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/docs" className="text-white">
            Docs
          </Link>
        </li>
        <li>
          <Link to="/resources" className="text-white">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}