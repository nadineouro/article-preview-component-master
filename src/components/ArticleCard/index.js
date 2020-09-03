import React from "react";
import ArticleCardStyles from "./styles";
import drawers from "../../assets/images/drawers.jpg";
import Author from "../Author";
import avatar from "../../assets/images/avatar-michelle.jpg";
import ShareButton from "../ShareButton";

const ArticleCard = () => (
  <ArticleCardStyles>
    <img className="mainImage" src={drawers} alt="drawers" />
    <div className="articleContent">
      <h1>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="cardFooter">
        <Author name="Michelle Appleton" date="28 Jun 2020" img={avatar} />
        <ShareButton />
      </div>
    </div>
  </ArticleCardStyles>
);

export default ArticleCard;
