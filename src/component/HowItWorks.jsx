import Img from "../assets/Screenshot 2025-02-20 at 10.55.15 1.png";

function HowItWorks() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center font-bold text-green-800 mb-2.5">
        How Roader Works
      </h2>
      <p className="text-base md:text-md text-gray-600 mb-4 text-center">
        Download Roader driver app from playstore, create account using your car
        and <br></br> drive by yourself. Get rides and earn more money.
      </p>
      <div className="flex flex-wrap text-center justify-evenly md:items-center items-start mt-10 ">
        <div className="w-1/2 md:w-[20%] mb-10 md:text-end">
          <div className="flex justify-center md:justify-end flex-wrap mb-20">
            <div className="flex justify-center bg-green-100 w-[50px] rounded-lg mb-2.5">
              <h2 className="text-green-900 p-2.5 text-2xl font-bold">1</h2>
            </div>
            <div>
              <h5 className="text-lg text-green-900 font-bold ">
                Request a trip
              </h5>
              <p>
                Choose your pickup and drop-off location, and the trip type that
                meets your needs.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end flex-wrap">
            <div className="flex justify-center bg-green-800 w-[50px] rounded-lg mb-2.5">
              <h2 className="text-white p-2.5 text-2xl font-bold">3</h2>
            </div>
            <div>
              <h5 className="text-lg text-green-900 font-bold ">
                Enjoy Your Trip
              </h5>
              <p>
                Meet your driver with the help of our real-time GPS services and
                enjoy your trip.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] md:w-[20%] mb-10">
          <img src={Img} alt="How Roader Works" className="w-full" />
        </div>
        <div className="w-1/2 md:w-[20%] mb-10 md:text-start">
          <div className="flex justify-center md:justify-start flex-wrap mb-20">
            <div className="flex justify-center bg-green-100 w-[50px] rounded-lg mb-2.5">
              <h2 className="text-green-900 p-2.5 text-2xl font-bold">2</h2>
            </div>
            <div>
              <h5 className="text-lg text-green-900 font-bold ">
                Match with a Driver
              </h5>
              <p>Roader will match you with the nearest available driver.</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start flex-wrap">
            <div className="flex justify-center bg-green-100 w-[50px] rounded-lg mb-2.5">
              <h2 className="text-green-900 p-2.5 text-2xl font-bold">4</h2>
            </div>
            <div>
              <h5 className="text-lg text-green-900 font-bold ">
                Pay and Rate
              </h5>
              <p>Pay with cash or card, and rate your driver.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
