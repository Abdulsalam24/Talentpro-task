import sec2Img from "../asset/img/sec2-img.svg";
import { classesItem } from "./data";

const About = () => {

  return (
    <main className="sec2 overflow-hidden relative gtp-div py-16 px-5 lg:py-[74px]">
      <div className="container-div flex flex-col justify-between gap-10 lg:flex-row mx-auto lg:items-center lg:gap-0 lg:mx-auto">
        <div className="text-center max-w-[560px] mx-auto lg:text-left lg:max-w-full lg:w-[35%] lg:mx-0">
          <h3 className="font-bold mx-auto lg:leading-[75px] max-w-[700px] lg:w-[600px] md:mx-0">
            High quality video, audio & live classes
          </h3>
          <p className="font-medium my-8 max-w-[540px] lg:max-w-full capitalize">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="input flex gap-3 justify-center mt-[16px] mb-8 items-center lg:justify-start">
            <button className="bg-blue text-white py-4 px-5 rounded-[4px]">
              View courses
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full min-w-[200px] lg:justify-start lg:min-w-[480px] mx-auto">
            {classesItem.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-center rounded-[6px] px-7 py-5 bg-white"
              >
                <img src={item.icon} alt="" />
                <p className="text-xs lg:text-base font-bold capitalize text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="img text-center md:max-w-[560px] mx-auto w-full flex justify-center lg:max-w-full lg:w-[60%] lg:mx-0">
          <img src={sec2Img} alt="illustration" />
        </div>
      </div>
    </main>
  );
};

export default About;
