import bar from "../asset/img/info-bar.svg";
import sec3Img from "../asset/img/sec3-img.svg";
import sec3Icon1 from "../asset/img/sec3-icon1.svg";
import sec3Icon2 from "../asset/img/sec3-icon2.svg";
import sec3Icon3 from "../asset/img/sec3-icon3.svg";
import sec3Icon4 from "../asset/img/sec3-icon4.svg";

const Feature = () => {
  const feature = [
    {
      secImg: sec3Icon1,
      heading: "experienced mentors",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
    },
    {
      secImg: sec3Icon2,
      heading: "affordable prices",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
    },
    {
      secImg: sec3Icon3,
      heading: "affordable prices",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
    },
    {
      secImg: sec3Icon4,
      heading: "Really boy law county",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
    },
  ];

  return (
    <div className="container-div relative feature py-20">
      <div className="flex flex-col max-w-[600px] mx-auto gap-10 items-center lg:max-w-full lg:flex-row lg:justify-between">
        <div className="text-center mx-auto lg:w-[50%] lg:text-left">
          <h3 className="capitalize font-bold sm:px-6 lg:px-0">
            this is why we are best from others
          </h3>
          <p className="my-6 text-[#A2A2A2]">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div>
            <img src={sec3Img} alt="sec3 Img" />
          </div>
        </div>

        <div className="flex flex-wrap gap-14 lg:gap-4 lg:w-[50%]">
          {feature.map((feat, i) => (
            <div className="bg-white w-full sm:w-[45%] py-6 px-4" key={i}>
              <img className="" src={feat.secImg} alt="bar" />
              <p className="capitalize mt-2 mb-1 leading-6 text-black font-extrabold">
                {feat.heading}
              </p>
              <p className="capitalize text-sm leading-7">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
