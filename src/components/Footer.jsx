import gptLogo from "../asset/img/gpt3-logo.svg";

const Footer = () => {
  return (
    <div className="footer bg-blueDark pt-20 px-5 pb-5 lg:pt-[175px] lg:pb-[25px]">
      <div className="max-w-[1300px] w-[92%] lg:w-[80%] mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[40px] lg:text-center lg:text-[62px]">
            Do you want to step in to the future before others
          </h1>
          <div className="btn lg:text-center mt-[64px] mb-[185px]">
            <button className="text-lg bg-transparent hover:bg-[#d6d6d625] border border-white p-3 lg:p-6">
              Request Early Access
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-14 lg:flex-row justify-between">
          <div className="logo lg:w-[20%]">
            <img className="mb-3 md:w-[118px]" src={gptLogo} alt="gptLogo" />
            <p className="text-white text-xs leading-4">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-between lg:flex-nowrap lg:w-[60%]">
            <ul className="w-[260px]">
              <p>Links</p>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
            <ul className="w-[260px]">
              <p>Company</p>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
            <ul className="w-[260px]">
              <p>Get in touch</p>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
        <p className="copyright text-center mt-20">
          © 2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
