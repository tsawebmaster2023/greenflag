import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-blue-500">
      <Link to="/" className="text-white text-lg font-bold">
        Site Name
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