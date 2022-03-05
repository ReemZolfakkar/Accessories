import React from "react";

function Changed_widget({ imgUrl, title, price }) {
  return (
    <div className="home-widget changed-widget">
      <div className="changed-widget__content">
        <img src={imgUrl} />
        <div className="changed-widget__content__data">
          <p className="changed-widget__content__data__title">{title}</p>
          <h6 className="changed-widget__content__data__price">
            ${price.toFixed(2)}
          </h6>
        </div>
        <button className="changed-widget__content__btn">Add to cart</button>
      </div>
    </div>
  );
}

export default Changed_widget;
