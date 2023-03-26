import bar from "../asset/img/info-bar.svg";
import sec3Img from '../asset/img/sec3-img.svg'

const Feature = () => {
  const feature = [
    {
      heading: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded. ",
    },
    {
      heading: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      heading: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      heading: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <div className="container-div relative feature py-20">
      <div className="flex flex-col gap-10 items-center">
        <div className="text-center max-w-[340px] mx-auto">
          <h3 className="capitalize text-2xl font-bold">
            this is why we are best from others
          </h3>
          <p className="my-4 text-[#A2A2A2] text-[8px] leading-4">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div>
            <img src={sec3Img} alt="sec3 Img" />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-16 justify-between lg:flex-row items-start">
        <div className="lg:w-[40%]">
          <h3 className="capitalize font-bold text-[35px] leading-[45px] mx-auto lg:leading-[75px] max-w-[700px] lg:text-[56px] lg:w-[700px] md:mx-0">
            this is why we are best from others
          </h3>
          <p className="text-[#A2A2A2] my-4 max-w-[540px] lg:max-w-full capitalize">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div>
            <img src={sec3Img} alt="sec3 Img" />
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-[57px] lg:flex-col lg:w-[50%]">
          {feature.map((feat, i) => (
            <div
              className="flex flex-col gap-5 justify-between sm:max-w-[460px] md:max-w-[325px] lg:flex-1 lg:max-w-full lg:flex-row"
              key={i}
            >
              <div className="lg:w-[25%]">
                <img className=" mb-[4px]" src={bar} alt="bar" />
                <p className="text-white leading-6 text-lg font-extrabold">
                  {feat.heading}
                </p>
              </div>
              <p className="text-sm leading-7 lg:w-[50%]">{feat.text}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Feature;
