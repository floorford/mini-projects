import React from "react";
import faker from "faker";

export default ({ author, meta, comment }) => {
  return (
    <section className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <section className="content">
        <a href="/" className="author">
          {author}
        </a>
        <p className="metadata">
          <span className="date">{meta}</span>
        </p>
        <p className="text">{comment}</p>
      </section>
    </section>
  );
};
