import React from "react";
import connectImg from "../asset/img/connectImg.svg";

const Connect = () => {
  return (
    <section className="bg-blue py-20">
      <div className="container-div">
        <div className="max-w-[1200px] mx-auto items-center flex flex-col gap-5">
          <div className="flex capitalize flex-col text-center justify-center items-center gap-2 text-white mb-8">
            <p className="text-white">join our community</p>
            <h3>
              are you ready to connect with the future talent of the tech world
            </h3>
            <p className="text-white">
              meet up with other techstars and grow together
            </p>
          </div>
          <div>
            <img src={connectImg} alt="connectImg" />
          </div>
          <button className="bg-white capitalize text-blue py-4 px-8 rounded-[5px] mt-10 mb-8">
            join our community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
