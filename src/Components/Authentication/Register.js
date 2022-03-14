import React, { useEffect, useState } from "react";
import register_validate from "../../Functions/Register_Validate";
import axios from "axios";

function Register() {
  const [formerrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const register = async () => {
    await axios.post("http://localhost:3001/Users", newuser).catch((err) => {
      return err;
    });
  };
  const [newuser, setNewuser] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    phone: "",
  });
  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewuser({ ...newuser, [key]: value });
  };
  const handleNewUser = (e) => {
    e.preventDefault();
    setFormErrors(register_validate(newuser));
    setisSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      setisSubmit(true);
      register();
    }
  }, [formerrors]);
  return (
    <div onSubmit={handleNewUser}>
      <div className="Auth-form">
        <div className="Auth-form__items">
          <label className="Auth-form__label">Name</label>
          <input
            type="text"
            className="Auth-form__inputs"
            name="name"
            onChange={handleInput}
          ></input>
        </div>
        <p className="Auth-form__error">{formerrors.name}</p>
        <div className="Auth-form__items">
          <label className="Auth-form__label">email</label>
          <input
            type="text"
            className="Auth-form__inputs"
            name="email"
            onChange={handleInput}
          ></input>
          <p className="Auth-form__error">{formerrors.email}</p>
        </div>
        <div className="Auth-form__items">
          <span className="Auth-form__label">Password</span>
          <input
            className="Auth-form__inputs"
            type="password"
            name="password"
            onChange={handleInput}
          />
        </div>
        <p className="Auth-form__error">{formerrors.password}</p>
        <div className="Auth-form__items">
          <span className="Auth-form__label">Address</span>
          <input
            className="Auth-form__inputs"
            type="text"
            name="address"
            onChange={handleInput}
          />
        </div>
        <p className="Auth-form__error">{formerrors.address}</p>
        <div className="Auth-form__items">
          <span className="Auth-form__label">Phone number</span>
          <input
            className="Auth-form__inputs"
            type="text"
            name="phone"
            onChange={handleInput}
          />
        </div>
        <p className="Auth-form__error">{formerrors.phone}</p>
        <div className="Auth-form__items">
          <button
            type="button"
            className="Auth-button Auth-form-button"
            onClick={handleNewUser}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
