import React, { useState } from "react";
import bag1 from "../../Images/bag1.jpg";

function ProductCard({Product}) {
  return (
    <>
      <div className="product-item">
          {Product.price}
      </div>
    </>
  );
}

export default ProductCard;
