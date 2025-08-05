import React from "react";
import Img from "../assets/Group 9 (1).png";
import Img2 from "../assets/Screenshot 2025-02-20 at 10.55.15 1.png";
import { BsEnvelopeArrowDownFill, BsBuildingFillCheck } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";

function AppWorks() {
  const [activeTab, setActiveTab] = React.useState("Driver");

  return (
    <div id="riders" className="flex flex-wrap justify-center mt-10">
      <div className="w-[90%]">
        <h2 className="text-2xl text-center mb-2.5 font-bold text-[#841dc8]">
          How does this app work
        </h2>
        <p className="text-base md:text-md text-gray-600 mb-4 text-center">
          Download catch driver app from playstore, create account using your
          car and <br /> drive by yourself. Get rides and earn more money.
        </p>
      </div>
      <div className="flex justify-center mb-4 bg-purple-100 rounded-lg items-center w-[220px] h-12 ">
        <button
          className={`w-[100px] h-9 rounded-lg ${
            activeTab === "Passenger"
              ? "bg-[#841dc8] text-white"
              : "bg-transparent text-gray-800"
          }`}
          type="button"
          onClick={() => setActiveTab("Passenger")}
        >
          Passenger
        </button>
        <button
          className={`w-[100px] rounded-lg h-9 ${
            activeTab === "Driver"
              ? "bg-[#841dc8] text-white"
              : "bg-transparent text-gray-800"
          }`}
          type="button"
          onClick={() => setActiveTab("Driver")}
        >
          Driver
        </button>
      </div>

      {activeTab === "Driver" && (
        <div className="w-full flex flex-wrap justify-around mt-10">
          <div className="w-[80%] md:w-[500px] mb-10">
            <img src={Img} alt="" className="w-full" />
          </div>
          <div className="w-[90%] md:w-1/3 flex flex-wrap justify-left gap-8">
            <div className="md:w-[40%] md:mr-5">
              <BsEnvelopeArrowDownFill className="text-[#841dc8] text-[36px] bg-purple-100 p-2 rounded-lg" />
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold">
                  Receive Offer
                </h5>
                <p>
                  You specify your details. Simply key in your information and
                  let us know what type of ride you need.
                </p>
              </div>
            </div>
            <div className="md:w-[40%]">
              <BsBuildingFillCheck className="text-[#841dc8] text-[36px] bg-purple-100 p-2 rounded-lg" />
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold">
                  Accept Offer
                </h5>
                <p>
                  The Q-garage app will help you with valuations and locations
                  of garages.
                </p>
              </div>
            </div>
            <div className="md:w-[40%]">
              <FaCarSide className="text-[#841dc8] text-[36px] bg-purple-100 p-2 rounded-lg" />
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold">Start Trip</h5>
                <p>
                  Its just down to you to select your garage and the option that
                  best suits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Passenger" && (
        <div className="w-full flex flex-wrap justify-around mt-10">
          <div className="w-[80%] md:w-[200px] mb-10">
            <img src={Img2} alt="" className="w-full" />
          </div>
          <div className="w-[90%] md:w-1/3 flex flex-wrap justify-left gap-8">
            <div className="md:w-[40%] md:mr-5">
              <BsEnvelopeArrowDownFill className="text-[#841dc8] text-[36px] bg-purple-100 p-2 rounded-lg" />
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold">
                  Receive Offer
                </h5>
                <p>
                  You specify your details. Simply key in your information and
                  let us know what type of ride you need.
                </p>
              </div>
            </div>
            <div className="md:w-[40%]">
              <BsBuildingFillCheck className="text-[#841dc8] text-[36px] bg-purple-100 p-2 rounded-lg" />
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold">Accept Offer</h5>
                <p>
                  The Q-garage app will help you with valuations and locations
                  of garages.
                </p>
              </div>
            </div>
            <div className="md:w-[40%]">
              <FaCarSide className="text-[#841dc8] text-[36px] bg-purple-100 p-2 rounded-lg" />
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold">Start Trip</h5>
                <p>
                  Its just down to you to select your garage and the option that
                  best suits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppWorks;
