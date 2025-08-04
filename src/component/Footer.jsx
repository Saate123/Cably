import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="flex flex-wrap justify-evenly items-start mb-10">
        <div className="w-[80%] md:w-1/4 mb-5">
          <h4 className="text-xl font-bold">Roader</h4>
          <p className="leading-7 text-sm">
            Roader is an innovative new entrant into the ride-hailing market in
            East Africa. Operated and owned by Africans for Africans. Roader
            brings local creativity and insights to improve the experience of
            passengers and drivers.
          </p>
        </div>
        <div className="w-[80%] md:w-1/5 mb-5">
          <h4 className="text-xl font-semibold mb-2.5">Quick Links</h4>
          <li className="mb-2.5 list-none">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-2.5 list-none">
            <Link to="/#">Privacy Policy</Link>
          </li>
          <li className="mb-2.5 list-none">
            <Link to="/#">Terms & Conditions</Link>
          </li>
        </div>
        <div className="w-[80%] md:w-1/5 mb-5">
          <h4 className="text-xl font-semibold mb-2.5">About Us</h4>
          <li className="mb-2.5 list-none">
            <Link to="/">Meet the Team</Link>
          </li>
          <li className="mb-2.5 list-none">
            <Link to="/#">Our Story</Link>
          </li>
          <li className="mb-2.5 list-none">
            <Link to="/#">Career</Link>
          </li>
        </div>
        <div className="w-[80%] md:w-1/5">
          <h4 className="text-xl font-semibold mb-2.5">Contacts</h4>
          <p className="mb-2.5">
            <Link to="/#">
              301 Beza Building, Bole Sub City, Addis Ababa, Ethiopia
            </Link>
          </p>
          <p className="mb-2.5">
            <Link to="/#">+251 911 123 456</Link>
          </p>
          <p>
            <Link to="/#">info@roader.com</Link>
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center border-t border-gray-300 py-4">
        <p className="text-left text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Roader. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link>
            <FaFacebookSquare className="text-white hover:text-blue-800 text-2xl" />
          </Link>
          <Link>
            <FaInstagramSquare className="text-white hover:text-blue-800 text-2xl" />
          </Link>
          <Link>
            <FaSquareXTwitter className="text-white hover:text-blue-800 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
