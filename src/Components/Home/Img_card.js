import React from "react";

function Img_card({ imgUrl }) {
  return (
    <div className="img-card">
      <img src={imgUrl} />
      <div className="img-card__hover">
        <h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1>
      </div>
    </div>
  );
}

export default Img_card;
