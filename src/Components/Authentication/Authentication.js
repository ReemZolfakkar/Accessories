import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useHistory, useLocation } from "react-router-dom";

function Authentication() {
  const location = useLocation();
  const [currentTab, setTab] = useState("Login");
  const [tabData, setTabData] = useState({
    title: "Welcome back,",
  });
  useEffect(() => {
    let current_tab = location.pathname.split("/")[2];
    setTab(current_tab);
    // console.log(current_tab);
    let tab_data =
      current_tab == "Login"
        ? {
            component: <Login />,
            title: "Welcome back,",
            title2: "New here?",
            description:
              "Sign up and discover great amount of new opportunities!",
            buttonText: "Sign up",
          }
        : {
            component: <Register />,
            title: "Time to feel like home,",
            title2: "One of us?",
            description:
              "If you already has an account, just sign in. We've missed you!",
            buttonText: "Sign in",
          };
    setTabData(tab_data);
  }, [location]);

  return (
    <div className="Auth-container row mx-0 align-items-center justify-content-center">
      <div className="col-5">
        <h2 className="Auth-form__title">{tabData.title}</h2>
        {tabData.component}
      </div>
      <div className="col-3 Auth-container__toggle-section">
        <h2 className="Auth-form__title Auth-form__title--white">
          {tabData.title2}
        </h2>
        <p className="Auth-form__desc">{tabData.description}</p>
        <Link to={`/Auth/${currentTab == "Login" ? "Register" : "Login"}`}>
          <button type="button" className="Auth-toggle-btn">
            {tabData.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Authentication;
