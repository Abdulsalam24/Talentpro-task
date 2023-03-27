import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { clientComment } from "./data";

const Client = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

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

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          transitionDuration={500}
          keyBoardControl={true}
          customTransition="all .5"
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          responsive={responsive}
          className="transition-all"
        >
          {clientComment.map((client, index) => (
            <div
              key={index}
              className="item cursor-grab mb-5 bg-white max-w-[350px] w-[90%] lg:min-w-[420px] xl:min-w-[450px] mx-auto rounded-[16px] flex flex-col gap-5 p-10 px-6"
            >
              <p>{client.text}</p>
              <div className="flex items-center gap-4">
                <img src={client.img} alt="client profile" />
                <div>
                  <h5>{client.name}</h5>
                  <p>{client.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Client;
