import logo from "../asset/img/logo.svg";
import { socials } from "./data";

const Footer = () => {
  return (
    <footer className="bg-blueDark py-20 md:py-40">
      <div className="container-div flex flex-col gap-8 justify-center sm:flex-row sm:flex-wrap sm:justify-between">
        <div className="logo md:w-[15%]">
          <img src={logo} alt="logo" />
          <p className="my-6 max-w-[300px]">
            Reach out to us on any of our social media networks
          </p>
          <div className="flex gap-4 md:gap-2 text-white">
            {socials.map((social) => (
              <img src={social.icon} alt="social" />
            ))}
          </div>
        </div>
        <ul className="md:w-[15%]">
          <h4>useful links</h4>
          <li>home</li>
          <li>about us</li>
          <li>our courses</li>
          <li>testimonials</li>
          <li>our community</li>
        </ul>
        <ul className="md:w-[15%]">
          <h4>community</h4>
          <li>help centers</li>
          <li>partners</li>
          <li>suggestion</li>
          <li>blog</li>
          <li>newsletter</li>
        </ul>
        <div className="capitalize md:w-[25%]">
          <h4 className="mb-6 text-xl">subscribe us</h4>
          <div className="flex items-center w-full">
            <input
              className="bg-bluish text-[#424141] py-4 px-4 w-[60%] sm:w-[75%] md:w-[70%] md:py-4 md:px-6"
              type="text"
              placeholder="nft123@gmail.com"
            />
            <button className="bg-blue text-xs text-white py-5 px-4 w-[40%] md:w-[46%] md:py-5">
              send message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
