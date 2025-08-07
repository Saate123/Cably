import Img from "../assets/Screenshot 2025-02-20 at 10.55.15 1.png";
import React from "react";
import Img2 from "../assets/Screenshot 2025-02-20 at 10.27.11.png"

function HowItWorks() {
  const [activeTab, setActiveTab] = React.useState("Passenger");

  return (
    <div className="flex flex-wrap justify-center mt-10">
      <div className="w-[90%]">
        <h2 className="text-2xl text-center font-bold text-[#841dc8] mb-2.5">
          How Cably Works
        </h2>
        <p className="text-base md:text-md text-gray-600 mb-4 text-center">
          Download Cably app from playstore, create account using your
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
        <div className="flex flex-wrap text-center justify-evenly md:items-center items-start mt-10 ">
          <div className="w-1/2 md:w-[20%] mb-10 md:text-end">
            <div className="flex justify-center md:justify-end flex-wrap mb-20">
              <div className="flex justify-center bg-purple-100 w-[50px] rounded-lg mb-2.5">
                <h2 className="text-[#841dc8] p-2.5 text-2xl font-bold">1</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Subscribe to a Plan
                </h5>
                <p>
                  Choose a daily, weekly, or monthly package that suits your
                  schedule.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end flex-wrap">
              <div className="flex justify-center bg-[#841dc8] w-[50px] rounded-lg mb-2.5">
                <h2 className="text-white p-2.5 text-2xl font-bold">3</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Accept & Drive
                </h5>
                <p>
                  Get matched with nearby passengers and navigate with real-time
                  GPS.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:w-[20%] mb-10">
            <img src={Img} alt="How Roader Works" className="w-full" />
          </div>
          <div className="w-1/2 md:w-[20%] mb-10 md:text-start">
            <div className="flex justify-center md:justify-start flex-wrap mb-20">
              <div className="flex justify-center bg-purple-100 w-[50px] rounded-lg mb-2.5">
                <h2 className="text-[#841dc8] p-2.5 text-2xl font-bold">2</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">Go Online</h5>
                <p>Set your availability and get ready for ride requests.</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start flex-wrap">
              <div className="flex justify-center bg-purple-100 w-[50px] rounded-lg mb-2.5">
                <h2 className="text-[#841dc8] p-2.5 text-2xl font-bold">4</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Get Paid Instantly
                </h5>
                <p>Earn after every trip — via cash or digital payment.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Passenger" && (
        <div className="flex flex-wrap text-center justify-evenly md:items-center items-start mt-10 ">
          <div className="w-1/2 md:w-[20%] mb-10 md:text-end">
            <div className="flex justify-center md:justify-end flex-wrap mb-20">
              <div className="flex justify-center bg-purple-100 w-[50px] rounded-lg mb-2.5">
                <h2 className="text-[#841dc8] p-2.5 text-2xl font-bold">1</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Request a Ride
                </h5>
                <p>
                  Set your pickup and destination points, then choose the ride
                  option that suits you.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end flex-wrap">
              <div className="flex justify-center bg-[#841dc8] w-[50px] rounded-lg mb-2.5">
                <h2 className="text-white p-2.5 text-2xl font-bold">3</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Ride Comfortably
                </h5>
                <p>
                  Track your driver in real-time and enjoy a safe, seamless
                  trip.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:w-[20%] mb-10">
            <img src={Img2} alt="How Roader Works" className="w-full" />
          </div>
          <div className="w-1/2 md:w-[20%] mb-10 md:text-start">
            <div className="flex justify-center md:justify-start flex-wrap mb-20">
              <div className="flex justify-center bg-purple-100 w-[50px] rounded-lg mb-2.5">
                <h2 className="text-[#841dc8] p-2.5 text-2xl font-bold">2</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Get Matched
                </h5>
                <p>
                  We’ll connect you with the nearest available driver in
                  seconds.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start flex-wrap">
              <div className="flex justify-center bg-purple-100 w-[50px] rounded-lg mb-2.5">
                <h2 className="text-[#841dc8] p-2.5 text-2xl font-bold">4</h2>
              </div>
              <div>
                <h5 className="text-lg text-[#841dc8] font-bold ">
                  Pay & Rate
                </h5>
                <p>
                  Pay easily with cash or card, then leave a rating to help us
                  improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HowItWorks;
