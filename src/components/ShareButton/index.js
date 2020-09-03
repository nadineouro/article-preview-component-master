import React, { useState } from "react";
import ShareButtonStyles from "./styles";
import iconShare from "../../assets/icons/icon-share.svg";
import ShareOptions from "../ShareOptions";

const ShareButton = () => {
  const [shareOptionsOpen, setShareOptionsOpen] = useState(false);
  return (
    <ShareButtonStyles>
      <img
        className="mainIcon"
        src={iconShare}
        alt="compartilhar"
        role="button"
        onClick={() => setShareOptionsOpen(!shareOptionsOpen)}
      />
      {shareOptionsOpen && <ShareOptions />}
    </ShareButtonStyles>
  );
};

export default ShareButton;
