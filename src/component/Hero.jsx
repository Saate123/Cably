import { Link } from "react-router-dom";
import Img from "../assets/googleplay.bc4400ce.svg";
import Img2 from "../assets/appstore.50df6f67.svg";
import HeroImg from "../assets/Group 5975.png";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-around px-0 py-10 md:py-20 w-full"
      style={{
        background: "conic-gradient( #a958e2, #9524e5, #a958e2, #9524e5)",
      }}
    >
      <div className="w-[90%] md:w-[500px] flex flex-col items-start space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-black mb-2">
          Download app, Start Drive, Earn Money!
        </h1>
        <p className="text-base md:text-lg text-white mb-4">
          Download Roader driver app from playstore, create account using your
          car and drive by yourself. Get rides and earn more money.
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
          className="w-3/4 md:w-[400px] max-w-md rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
