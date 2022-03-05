import React from "react";

function Fixed_widget({ imgUrl, title }) {
  return (
    <div
      className="home-widget fixed-widget"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url(${imgUrl})`,
      }}
    >
      <h1 className="fixed-widget__title">
        <span>{title}</span>
      </h1>
    </div>
  );
}

export default Fixed_widget;
