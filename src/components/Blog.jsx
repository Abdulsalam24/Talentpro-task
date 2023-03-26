import blog1 from "../asset/img/blog1.svg";
import blog2 from "../asset/img/blog2.svg";
import blog3 from "../asset/img/blog3.svg";
import blog4 from "../asset/img/blog4.svg";
import blog5 from "../asset/img/blog5.svg";

const Blog = () => {
  const blogInfos = [
    {
      date: "Sep 26, 2021",
      img: blog1,
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      img: blog2,
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      img: blog3,
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      img: blog4,
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      date: "Sep 26, 2021",
      img: blog5,
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];

  return (
    <div className="blog container-div">
      <div className="flex flex-col gap-5">
        <div className="max-w-[693px]">
          <h1 className="text-[40px] lg:text-[62px]">
            A lot is happening, We are blogging about it.
          </h1>
        </div>
        <div className="blogs flex flex-wrap justify-center gap-12 mt-28 lg:gap-12">
          {blogInfos.map((info, i) => (
            <div key={i} className="sm:max-w-[460px] md:max-w-[325px] lg:max-w-full">
              <img className="w-full" src={info.img} alt="" />
              <div className="text flex flex-col justify-between items-start gap-10 bg-bluish py-8 px-6">
                <div>
                  <span className="text-white">{info.date}</span>
                  <h4>{info.text}</h4>
                </div>
                <button>Read Full Article</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
