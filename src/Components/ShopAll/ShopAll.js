import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import axios from "axios";
import Loader from "../Loader";
function ShopAll() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [error, setError] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, [3000]);
  }, []);
  return (
    <div>
      {error == false && (
        <>
          {products?.map((value, index) => {
            return <ProductCard key={index} Product={value} id={index} />;
          })}
        </>
      )}
      {error == true && <Loader />}
    </div>
  );
}

export default ShopAll;
