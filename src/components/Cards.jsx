import React from "react";
import cardImg1 from "../asset/img/card1.svg";
import cardImg2 from "../asset/img/card2.svg";
import cardImg3 from "../asset/img/card3.svg";
import cardImg4 from "../asset/img/card4.svg";
import cardImg5 from "../asset/img/card5.svg";
import cardImg6 from "../asset/img/card6.svg";
import cardProfile1 from "../asset/img/cardProfile1.svg";
import cardProfile2 from "../asset/img/cardProfile2.svg";
import cardProfile3 from "../asset/img/cardProfile3.svg";
import cardProfile4 from "../asset/img/cardProfile4.svg";
import cardProfile5 from "../asset/img/cardProfile5.svg";
import cardProfile6 from "../asset/img/cardProfile6.svg";
import star from "../asset/icons/starColoured.svg";
import clock from "../asset/icons/clock.svg";
import bookIcon from "../asset/icons/book.svg";

import bgStar from '../asset/icons/bgStar.svg'

const Cards = () => {

  const cardInfo = [
    {
      img: cardImg1,
      dept: "design",
      title: "introduction to user research in ux design",
      star: "4.7k",
      rate: "(32.7k+)",
      lesssons: "15 lessons",
      duration: "23hrs 50mins",
      profileImg: cardProfile1,
      profileName: "leonard victor",
      price: "$15.00",
    },
    {
      img: cardImg2,
      dept: "marketing",
      title: "introduction to  new marketing audience ",
      star: "4.7k",
      rate: "(8.7k+)",
      lesssons: "22 lessons",
      duration: "22hrs 30mins",
      profileImg: cardProfile2,
      profileName: "Jeffrey williams",
      price: "$32.00",
    },
    {
      img: cardImg3,
      dept: "development",
      title: "introduction to html, css & bootstrap",
      star: "4.7k",
      rate: "(12.7k+)",
      lesssons: "55 lessons",
      duration: "45hrs 50mins",
      profileImg: cardProfile3,
      profileName: "claretta mason",
      price: "$55.00",
    },
    {
      img: cardImg4,
      dept: "development",
      title: "introduction to javascript, git & GitHub",
      star: "4.7k",
      rate: "(32.7k+)",
      lesssons: "22 lessons",
      duration: "30hrs 50mins",
      profileImg: cardProfile4,
      profileName: "Jessica duke",
      price: "$45.00",
    },
    {
      img: cardImg5,
      dept: "marketing",
      title: "introduction to outroom  marketing analysis",
      star: "4.7k",
      rate: "(4.7k+)",
      lesssons: "26 lessons",
      duration: "33hrs 50mins",
      profileImg: cardProfile5,
      profileName: "Samuel jacobs",
      price: "$25.00",
    },
    {
      img: cardImg6,
      dept: "marketing",
      title: "introduction to live  marketing analysis",
      star: "4.7k",
      rate: "(15.7k+)",
      lesssons: "32 lessons",
      duration: "10hrs 50mins",
      profileImg: cardProfile6,
      profileName: "adam smith",
      price: "$25.00",
    },
  ];

  return (
    <section className="py-20 relative">
      <img className="absolute  top-[10%] left-[10%] md:top-[15%]" src={bgStar} alt="bgStar" />
      <div className="container-div">
        <div className="flex flex-col max-w-[800px] text-center mx-auto justify-center items-center gap-5">
          <h3>browse our popular courses</h3>
          <p className="max-w-[700px] mx-auto mb-16 mt-2">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <ul className="w-full sm:px-20 gap-5 justify-center flex flex-wrap capitalize items-center md:justify-between">
            <li className="bg-white rounded-[4px] py-3 px-4 text-blue">
              all categories{" "}
            </li>
            <li>design</li>
            <li>development</li>
            <li>marketing</li>
          </ul>
        </div>
        <div className="cards flex flex-wrap gap-14 max-w-[800px] mx-auto my-5 lg:max-w-full">
          {cardInfo.map((card, index) => (
            <div
              key={index}
              className="bg-white w-full sm:w-[45%] rounded-[16px] flex flex-col gap-5 p-4 lg:w-[30%]"
            >
              <img src={card.img} alt="" />
              <div className="dept cardFlex">
                <span className="py-1 px-4 bg-[#1E5DCE33] text-[#1E5DCE] rounded-[16px]">
                  {card.dept}
                </span>
                <div className="cardFlex">
                  <span>{card.star}</span>
                  <img src={star} alt="" />
                  <span>{card.rate}</span>
                </div>
              </div>

              <h4 className="text-lg capitalize">{card.title}</h4>
              <div className="cardFlex">
                <div className="cardFlex">
                  <img src={clock} alt="clock" />
                  <span>{card.duration}</span>
                </div>
                <div className="cardFlex">
                  <img src={bookIcon} alt="" />
                  <span>{card.lesssons}</span>
                </div>
              </div>
              <div className="cardFlex">
                <div className="cardFlex">
                  <img src={card.profileImg} alt="" />
                  <p>{card.profileName}</p>
                </div>
                <p className="text-blue text-lg font-bold">{card.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-8">
          <button className="bg-blue capitalize text-white py-3 px-7 rounded-[5px]">
            explore all courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
