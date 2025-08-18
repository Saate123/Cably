import Img from "../assets/CABLY MOCKUP 1.png";
import Img1 from "../assets/googleplay.bc4400ce.svg";
import Img2 from "../assets/appstore.50df6f67.svg";
import { Link } from "react-router-dom";

function Download() {
  return (
    <div className="flex flex-wrap justify-center mb-20 mt-10">
      <div className="bg-[#a668d0] w-[80%] flex flex-wrap justify-around items-center p-5 rounded-lg mt-10">
        <div className="text-white w-[90%] md:w-1/2 mb-10">
          <h2 className="text-2xl text-left mb-5 font-bold">
            Download the Cably App
          </h2>
          <p className="italic mb-5">Your Ride. Your Terms. Your Africa.</p>
          <p className="leading-7">
            Cably is an innovative new entrant into Africa’s ride-hailing
            market, designed to democratize e-hailing for both drivers and
            passengers. Whether you’re heading to work, running errands, or
            exploring the city, Cably puts affordable, reliable, and transparent
            transportation at your fingertips.
          </p>
          <div className="flex space-x-4 mt-10">
            <Link to="#">
              <img
                src={Img1}
                alt="Google Play Store"
                className="h-12 w-auto md:h-14 transition-transform hover:scale-105"
              />
            </Link>
            <Link to="#">
              <img
                src={Img2}
                alt="App Store"
                className="h-12 w-auto md:h-14 transition-transform hover:scale-105"
              />
            </Link>
          </div>
        </div>
        <div className="w-[80%] md:w-[200px]">
          <img src={Img} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Download;
