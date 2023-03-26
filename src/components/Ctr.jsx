const Ctr = () => {
  return (
    <div className="ctr container-div">
      <div className="flex flex-col justify-between gap-5 p-7 lg:items-center lg:p-12 rounded-sm lg:flex-row">
        <div>
          <p className="text-xs">Request Early Access to Get Started</p>
          <h4 className="text-black mt-1">
            Register today & start exploring the endless possiblities.
          </h4>
        </div>
        <div>
          <button className="bg-black hover:bg-[#212121] text-lg text-white py-3 px-12 rounded-[40px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ctr;
