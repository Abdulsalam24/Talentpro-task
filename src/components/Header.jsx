import heroImg from "../asset/img/hero-img.svg";
import groupImg from "../asset/img/group-img.svg";

const Header = () => {
  return (
    <header className="relative bg-blue">
      <div className="container-div flex flex-col justify-between gap-10 lg:flex-row mx-auto lg:items-center lg:gap-0">
        <div className="text-center max-w-[560px] mx-auto lg:text-left lg:max-w-full lg:w-[54%] lg:pt-32">
          <h1 className="leading-[45px] max-w-[340px] mx-auto text-[32px] lg:max-w-full lg:leading-[75px] lg:text-[64px]">
            Grow your skills to advance your career path
          </h1>
          <p className="my-8 capitalize max-w-[560px]">
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </p>

          <div className="flex gap-3 justify-center items-center max-w-sm mx-auto  lg:max-w-full lg:justify-start">
            <button className=" text-white py-2 px-2 border border-white rounded-[2px] w-[50%] md:py-3 lg:w-[35%]">
              Get started now
            </button>
            <button className="bg-white text-blue py-2 px-2 rounded-[2px] w-[35%] lg:py-3 lg:w-[25%]">
              enroll now
            </button>
          </div>

          <div className="img my-9 flex justify-center items-center gap-5 lg:justify-start">
            <img className="w-40" src={groupImg} alt="" />
            <p className="text-xs text-white">
              <span className="text-lg">255k+</span> previews
            </p>
          </div>
        </div>

        <div className="img max-w-[560px] mx-auto text-center w-full flex justify-center lg:w-[46%]">
          <img src={heroImg} alt="illustration" />
        </div>

      </div>
    </header>
  );
};

export default Header;
