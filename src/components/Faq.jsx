import React, { useState } from "react";
import bgWave from "../asset/icons/bgWave.svg";
import bgCircle from "../asset/icons/bgCircle.svg";

const Faq = () => {
  const accordionInfo = [
    {
      title: "Is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "Can i change my plan later?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },

    {
      title: "Are the courses lifetime?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "Do i get certified after taking courses?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "How do i reach out to mentors?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "Do we get job ready after taking courses?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "Is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <section className="py-20 relative">
      <img className="absolute top-[50%] left-[0%]" src={bgWave} alt="" />
      <img className="absolute top-[10%] right-[10%]" src={bgCircle} alt="" />

      <div className="container-div">
        <div className="">
          <div className="max-w-[765px] mx-auto flex capitalize flex-col text-center justify-center items-center gap-2 text-white mb-8">
            <h3 className="text-black">frequently asked questions</h3>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto w-full flex flex-col mt-16">
            {accordionInfo.map((acc, i) => (
              <div
                key={i}
                className="w-full border py-5 border-lightGray border-x-0 border-t-0"
              >
                <label
                  className={` ${
                    selected === i ? "text-blue" : ""
                  } cursor-pointer text-2xl flex justify-between items-center font-bold`}
                  onClick={() => toggle(i)}
                >
                  <i className="not-italic">{acc.title}</i>
                  <span className="text-lg">{selected === i ? "-" : "+"}</span>
                </label>
                <p
                  className={`pt-4 ${
                    selected === i ? "content show" : "content"
                  }`}
                >
                  {acc.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
