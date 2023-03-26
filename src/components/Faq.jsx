import React, { useState } from "react";
import bgWave from '../asset/icons/bgWave.svg'
import bgCircle from "../asset/icons/bgCircle.svg";


const Faq = () => {
    
  const accordionInfo = [
    {
      id: 1,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },
    {
      id: 2,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },

    {
      id: 3,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },
    {
      id: 4,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },
    {
      id: 6,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },
    {
      id: 7,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },
    {
      id: 8,
      title: "is there a free trial available?",
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
      view: false,
    },
  ];

  const [view, setView] = useState(true);

  const handleView = (id) => {
    setView(!view);
    accordionInfo.map((x) => (x.id === id ? { ...x, view: view } : x));
    console.log(
      accordionInfo.map((x) =>
        x.id === id ? { ...x, view: view } : "nononon"
      ),
    );
  };

  return (
    <section className="py-20 relative">
      <img className="absolute top-[50%] left-[0%]" src={bgWave} alt="" />
      <img className="absolute top-[10%] right-[10%]" src={bgCircle} alt="" />

      <div className="container-div">
        <div className="max-w-[765px] mx-auto">
          <div className="flex capitalize flex-col text-center justify-center items-center gap-2 text-white mb-8">
            <h3 className="text-black">frequently asked questions</h3>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>

          <div className="accordion flex flex-col gap-14 mt-16">
            {accordionInfo.map((acc) => (
              <div key={acc.id}>
                <label
                  className="text-2xl font-bold"
                  onClick={() => handleView(acc.id)}
                >
                  {acc.title}
                </label>
                {acc.view ? <p className="pt-4">{acc.text}</p> : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
