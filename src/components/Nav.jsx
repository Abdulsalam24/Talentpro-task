import { useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../asset/img/logo.svg";

const Nav = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const scroll = () => {
      if (window.scroll) {
        setMobile(mobile);
      }
    };

    window.addEventListener("scroll", scroll);
  }, []);

  return (
    <nav className="nav z-10 pb-[50px] bg-blue">
      <div className="relative w-full px-7 max-w-[1300px] flex justify-between items-center mx-auto py-6 lg:px-4 lg:py-3 lg:gap-4">
        <div className="lg:w-[10%]">
          <img className="w-20 " src={logo} alt="gptLogo" />
        </div>
        <div
          className={`absolute ${
            mobile && "hidden"
          } top-0 left-0 h-screen bg-bluish z-10 text-white w-full flex flex-col gap-5 lg:flex lg:justify-between lg:flex-row lg:bg-inherit lg:items-center lg:static lg:h-20 lg:w-[56%]`}
        >
          <ul className="menu-list flex flex-col gap-10 pt-24 px-7 pb-5 lg:flex-row lg:flex lg:items-center lg:p-0">
            <li>Home</li>
            <li>What is GPT?</li>
            <li>Open AI</li>
            <li>Case Studies</li>
            <li>Library</li>
            <li>
              <button className="bg-white text-blue py-3 px-7 rounded-[5px]">
                Sign up
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 lg:w-[10%] lg:hidden">
          <span
            className="block z-10 lg:hidden"
            onClick={() => setMobile((prevState) => !prevState)}
          >
            <div className="text-white text-4xl">
              {mobile ? <AiOutlineMenu /> : <FaTimes />}
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
