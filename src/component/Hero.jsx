import { Link } from "react-router-dom";
import Img from "../assets/googleplay.bc4400ce.svg";
import Img2 from "../assets/appstore.50df6f67.svg";
import HeroImg from "../assets/Group 5975.png";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-start justify-around px-0 py-10 md:py-15 w-full"
      style={{
        background: "conic-gradient( #a958e2, #9524e5, #a958e2, #9524e5)",
      }}
    >
      <div className="w-[80%] ml-5 md:w-[600px] flex flex-col items-start space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white mb-2">
          Cably –{" "}
          <ReactTyped
            strings={[
              "Where Every Trip Pays Off",
              "No Commissions. Just Connections.",
              "Smart Rides. Honest Fares. Total Freedom",
              "More Earnings for Drivers. Better Deals for Riders.",
              " Driven by Fairness. Powered by You",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
        </h1>
        <p className="text-base md:text-lg text-white mb-4">
          Cably turns your everyday trips into rewarding experiences - fast,
          easy, and built for you.
        </p>
        <div className="flex space-x-4">
          <Link to="#">
            <img
              src={Img}
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
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src={HeroImg}
          alt="Hero"
          className="w-3/4 md:w-[320px] max-w-md rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
