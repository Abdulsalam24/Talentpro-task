import zoom from "../asset/img/zoom.svg";
import stripe from "../asset/img/stripe.svg";
import monday from "../asset/img/monday.svg";
import slack from "../asset/img/slack.svg";
import dropbox from "../asset/img/dropbox.svg";


const Logo = () => {
  return (
    <div className="bg-[#CCDBF0]">
      <div className="py-12 flex flex-wrap justify-center gap-10 container-div">
        <img className="w-20 md:w-32" src={zoom} alt="zoom" />
        <img className="w-20 md:w-32" src={stripe} alt="stripe" />
        <img className="w-20 md:w-32" src={monday} alt="monday" />
        <img className="w-20 md:w-32" src={slack} alt="slack" />
        <img className="w-20 md:w-32" src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Logo;
