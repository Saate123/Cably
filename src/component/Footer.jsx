import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Img from "../assets/transparent-logo.png";

function Footer() {
  return (
    <div className="bg-[#841dc8] text-white p-10">
      <div className="flex flex-wrap justify-evenly items-center mb-10">
        <div className="w-[90%] md:w-1/4 mb-5">
          <img src={Img} alt="" className="w-[50px]" />
          <p className="leading-7 text-sm">
            Cably is a revolutionary ride-hailing platform designed to transform
            mobility across Africa. With a driver-first subscription model and a
            focus on affordability, safety, and inclusivity, Cably empowers both
            drivers and riders to move freely, fairly, and efficiently.
          </p>
        </div>
        <div className="w-[90%] md:w-1/5 mb-5">
          <h4 className="text-xl font-semibold mb-2.5">Quick Links</h4>
          <li className="mb-2.5 list-none">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
          </li>
          <li className="mb-2.5 list-none">
            <Link
              to="/privacy"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Privacy Policy
            </Link>
          </li>
          <li className="mb-2.5 list-none">
            <Link
              to="/terms"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Terms & Conditions
            </Link>
          </li>
        </div>
        <div className="w-[90%] md:w-1/4">
          <h4 className="text-xl font-semibold mb-2.5">Contacts</h4>
          <p className="mb-2.5">
            <Link
              to="https://maps.app.goo.gl/6iUynVXFvnRYZx5V9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elzazi complex, Opposite Westharm petrol station along
              gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )
            </Link>
          </p>
          <p className="mb-2.5">+2349011684637</p>
          <p>
            <Link to="mailto:Hello@mycably.com">Hello@mycably.com</Link>
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center border-t border-gray-300 py-4">
        <p className="text-left text-gray-900 text-sm">
          &copy; {new Date().getFullYear()} Cably. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link>
            <FaFacebookSquare className="text-white hover:text-purple-100 text-2xl" />
          </Link>
          <Link>
            <FaInstagramSquare className="text-white hover:text-purple-100 text-2xl" />
          </Link>
          <Link>
            <FaSquareXTwitter className="text-white hover:text-purple-100 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
