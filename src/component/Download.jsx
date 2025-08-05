import Img from "../assets/Screenshot 2025-02-20 at 10.27.11.png";

function Download() {
  return (
    <div className="flex flex-wrap justify-center mb-20 mt-10">
      <div className="bg-[#a668d0] w-[80%] flex flex-wrap justify-around items-center p-5 rounded-lg mt-10">
        <div className="text-white w-[90%] md:w-1/2 mb-10">
          <h2 className="text-2xl text-left mb-5 font-bold">
            Download Roader App
          </h2>
          <p className="leading-7">
            Roader is an innovative new entrant into the ride-hailing market in
            East Africa. Operated and owned by Africans for Africans. Roader
            brings local creativity and insights to improve the experience of
            passengers and drivers. Whether you need to get where you are going
            fast or looking to make money on your schedule, Roader provides the
            best solutions.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-lg mt-10 font-bold">
            Get Started
          </button>
        </div>
        <div className="w-[80%] md:w-[200px]">
          <img src={Img} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Download;
