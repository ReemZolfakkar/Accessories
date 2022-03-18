import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../../redux/actions/productActions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductInfo from "./ProductInfo";
import { setCart } from "../../redux/actions/productActions";
import Loader from "../Loader";

function ProductDetails(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [error, setError] = useState(true);
  const [count, setCount] = useState(1);
  const fetchProductsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        setError(true);
      });
    dispatch(selectedProduct(response.data));
    setError(false);
  };
  const addToCart = () => {
    if (Number(count) >= 1) {
      let { id, title, image, price } = product.product;
      dispatch(setCart({ itemId:id, title, image, price,count: parseInt(count) }));
    }
  };
  useEffect(() => {
    fetchProductsDetails();
  }, []);
  if (error == true) return true;
  const selectedproduct = product.product;
  return (
    <div className="product-details">
      {error == true && <Loader />}
      {error == false && <div>{error}</div>}
      {product && (
        <div className="row align-items-center justify-content-center">
          <div className="col-6">
            <div className="product-details-div-img">
              <img
                className="product-details-img"
                src={selectedproduct.image}
              ></img>
            </div>
          </div>
          <div className="col-6">
            <div>
              <h1 className="product-details-title">{selectedproduct.title}</h1>
            </div>
            <div className="product-details-price-div">
              <span className="product-details-price">
                {selectedproduct.price} EGP
              </span>
            </div>
            <div className="product-details-quantity">
              <span>Quantity</span>
            </div>
            <div className="product-details-quantity-input-div">
              <input
                className="product-details-quantity-input"
                value={count}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
                type="number"
                id="quantity"
                name="quantity"
                min="1"
              ></input>
            </div>
            <div>
              <button
                className="product-details-btn"
                onClick={() => {
                  addToCart();
                }}
              >
                Add to Cart
              </button>
            </div>
            <ProductInfo
              description={selectedproduct.description}
            ></ProductInfo>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
