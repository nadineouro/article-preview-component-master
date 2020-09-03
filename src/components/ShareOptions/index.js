import React from "react";
import ShareOptionsStyles from "./styles";
import facebook from "../../assets/icons/icon-facebook.svg";
import twitter from "../../assets/icons/icon-twitter.svg";
import pinterest from "../../assets/icons/icon-pinterest.svg";

const ShareOptions = () => {
  const socialMedias = [
    { name: "facebook", icon: facebook, href: "/facebook" },
    { name: "twitter", icon: twitter, href: "/twitter" },
    { name: "pinterest", icon: pinterest, href: "/pinterest" },
  ];
  return (
    <ShareOptionsStyles>
      SHARE
      {socialMedias.map((socialMedia) => (
        <div
          key={socialMedia.name}
          role="button"
          className="socialMedia"
          onClick={() => window.location.assign(socialMedia.href)}
        >
          <img src={socialMedia.icon} alt={socialMedia.name} />
        </div>
      ))}
    </ShareOptionsStyles>
  );
};

export default ShareOptions;
