import React from "react";
import { FaGlobe, FaMugSaucer } from "react-icons/fa6";

const Blog_23 = ({id, title, catlog, img, remote_img, desp}) => {
  return (
    <article className="blog" key={id}>
      <img src={img} alt="Coffee photo" className="img blog-img" />
      <div className="blog-content">
        <span>
          {catlog} {catlog === "lifestyle" ? <FaMugSaucer /> : <FaGlobe />}
        </span>
        <h3>{title}</h3>
        <p>{desp}</p>
        <a href="#">read more!!!!</a>
      </div>
    </article>
  );
};

export default Blog_23;
