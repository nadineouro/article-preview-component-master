import React from "react";
import AuthorStyles from "./styles";
import Avatar from "../Avatar";

const Author = ({ name, date, img }) => (
  <AuthorStyles>
    <Avatar img={img} />
    <div className="info">
      <p className="name">{name}</p>
      <p className="date">{date}</p>
    </div>
  </AuthorStyles>
);

export default Author;
