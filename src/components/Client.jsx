import React from "react";
import commentImg1 from "../asset/img/commentImg1.svg";
import commentImg2 from "../asset/img/commentImg2.svg";
import commentImg3 from "../asset/img/commentImg3.svg";

const Client = () => {
  const clientComment = [
    {
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      img: commentImg2,
      name: "samuel fortune",
      position: "product designer",
    },
    {
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      img: commentImg3,
      name: "samuel fortune",
      position: "product designer",
    },
    {
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      img: commentImg1,
      name: "samuel fortune",
      position: "product designer",
    },
    {
      text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
      img: commentImg1,
      name: "samuel fortune",
      position: "product designer",
    },
  ];

  return (
    <section>
      <div className="conatiner-div">
        <div className="flex flex-col max-w-[800px] text-center mx-auto justify-center items-center gap-5">
          <h3>what our clients are saying</h3>
          <p className="max-w-[700px] mx-auto mb-16 mt-2">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className="comment">
                  {
                      clientComment.map((client) => (
                          <div>
                              
                          </div>
                      ))
            }
        </div>
      </div>
    </section>
  );
};

export default Client;
