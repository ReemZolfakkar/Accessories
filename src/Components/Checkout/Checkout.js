import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { RiVisaLine } from "react-icons/ri";
import Payment_Validate from "./../../Functions/Payment_Validate";
function Checkout() {
  const [products, setProducts] = useState([
    { name: "product1", price: "20$" },
    { name: "product2", price: "17$" },
  ]);
  const [visaData, setVisaData] = useState({
    CardNumber: "",
    CardHolder: "",
    Expires: "",
    CVC: "",
  });
  const [formsErrors, setErrors] = useState({});
  const handleInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setVisaData({ ...visaData, [key]: value });
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Payment_Validate(visaData));
  };
  return (
    <div className="row Checkout">
      <div className="col-4 Chechout__summarize">
        checkout list
        {/* {products.map((product, index) => {
          return (
            <div key={index}>
              <ProductCard Product={product} id={index} />
            </div>
          );
        })} */}
      </div>
      <div className="col-4 Chechout__form">
        <div>
          <div className="Chechout__form__visa">
            <RiVisaLine />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mx-0">
              <div className="col-12 Chechout__form__items">
                <label className="Chechout__form__label">Card Number</label>
                <input
                  type="number"
                  className="Chechout__form__inputs"
                  name="CardNumber"
                  onChange={handleInput}
                ></input>
                <p className="Chechout__form__error">
                  {formsErrors.CardNumber}
                </p>
              </div>
              <div className="col-12 Chechout__form__items">
                <label className="Chechout__form__label">Card Holder</label>
                <input
                  type="text"
                  className="Chechout__form__inputs"
                  name="CardHolder"
                  onChange={handleInput}
                ></input>
                <p className="Chechout__form__error">
                  {formsErrors.CardHolder}
                </p>
              </div>

              <div className="col-6 Chechout__form__items">
                <label className="Chechout__form__label">Expires</label>
                <input
                  type="text"
                  className="Chechout__form__inputs"
                  name="Expires"
                  onChange={handleInput}
                ></input>
                <p className="Chechout__form__error">{formsErrors.Expires}</p>
              </div>
              <div className="col-6 Chechout__form__items">
                <label className="Chechout__form__label">CVC</label>
                <input
                  type="number"
                  className="Chechout__form__inputs"
                  name="CVC"
                  onChange={handleInput}
                ></input>
                <p className="Chechout__form__error">{formsErrors.CVC}</p>
              </div>
            </div>
            <div className="text-center">
              <button className="Chechout__form__button" type="submit">Checkout</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
