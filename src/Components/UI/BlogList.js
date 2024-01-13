import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/BlogList.css"



const BlogList = (props) => {
  const { imgUrl, title, author, date, description, time } = props.item;
  return (
    <>
      <div className="blog-item border-[1.5px] border-[#7c8a9736] mt-10">

        <div className="blog-img">
          <img src={imgUrl} alt="blog-img" />
        </div>

        <div className="blog-info">

          <h6 className="blog__title md:text-[19.2px] text-[#000d6b] font-semibold hover:text-[#f9a826] ml-5 my-3"><Link to={`/blogs/${title}`}>
            {title}
          </Link></h6>

          <h4 className="md:text-[14.4px] text-[11.2px] text-[#7c8a97] ml-5 mr-5 ">{description.length > 100 ? description.substr(0, 100) : description}</h4>

          <h6 className="read__more text-[#f9a826] md:text-[16px] text-[12px] font-semibold border-b-2 border-b-[#7c8a9736] pb-4 ml-5 mr-5 my-3"><Link to={`/blogs/${title}`}>
            Read More
          </Link></h6>

          <div className="blog__time flex justify-between ml-5 my-5">
            <span className="blog__author text-[#000d6b] md:text-[16px] text-[11.2px]">
              <i class="ri-user-line"></i> {author}
            </span>

            <div className="flex mr-5 space-x-4">
              <span className=" section__description flex align-items-center gap-1 text-[#7c8a97] md:text-[14.4px] text-[11.2px]">
                <i class="ri-calendar-line"></i> {date}
              </span>

              <span className="section__description flex align-items-center gap-1   text-[#7c8a97] md:text-[14.4px] text-[11.2px]">
                <i class="ri-time-line"></i> {time}
              </span>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
export default BlogList