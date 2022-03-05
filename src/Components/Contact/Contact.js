import React, { useState, useEffect } from "react";
import contact_validate from "../../Functions/Contact_Validate";

function Contact() {
  const [formerrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [newuser, setNewuser] = useState({
    firstname: "",
    secondname: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewuser({ ...newuser, [key]: value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    setFormErrors(contact_validate(newuser));
    setisSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      setisSubmit(true);
    }
  }, [formerrors]);
  return (
    <div className="contact">
      <h1 className="contact__title">GET IN TOUCH</h1>
      <div className="contact__body">
        <h4 className="contact__body__main-title">CUSTOMER SERVICE</h4>
        <div className="row contact__body__three">
          <div className="col-md-4 col-12">
            <h3 className="contact-card1__title">Flagship Store</h3>
            <p className="contact-card1__data">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className="contact-card1__title">Opening Hours</h3>
            <p>
              Monday-Friday
              <br />
              9:00am - 7:00pm EST
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className="contact-card1__title">Contact Us</h3>
            <p>
              1-800-000-0000
              <br />
              info@mysite.com
            </p>
          </div>
        </div>
        <div>
          <h3 className="contact-card1__title">Inquiries</h3>
          <p className="contact-card1__data">
            For questions regarding our products and services you
            <br />
            can also contact us by filling out the form below.
          </p>
        </div>
        <div onSubmit={handleUser}>
          <div className="contact-form">
            <div className="row mx-0 justify-content-between">
              <div className="contact-form__items col-md-6 col-12">
                <label className="contact-form__label">First Name</label>
                <input
                  type="text"
                  className="contact-form__inputs"
                  name="firstname"
                  onChange={handleInput}
                ></input>
                <p className="contact-form__error">{formerrors.firstname}</p>
              </div>
              <div className="contact-form__items col-md-6 col-12">
                <label className="contact-form__label">Last Name</label>
                <input
                  type="text"
                  className="contact-form__inputs"
                  name="lastname"
                  onChange={handleInput}
                ></input>
                <p className="contact-form__error">{formerrors.lastname}</p>
              </div>
              <div className="contact-form__items col-12">
                <label className="contact-form__label">Email*</label>
                <input
                  type="text"
                  className="contact-form__inputs"
                  name="email"
                  onChange={handleInput}
                ></input>
                <p className="contact-form__error">{formerrors.email}</p>
              </div>
              <div className="contact-form__items col-12">
                <span className="contact-form__label">Subject</span>
                <input
                  className="contact-form__inputs"
                  type="text"
                  name="subject"
                  onChange={handleInput}
                />
                <p className="contact-form__error">{formerrors.subject}</p>
              </div>
              <div className="contact-form__items col-12">
                <span className="contact-form__label">Message</span>
                <textarea
                  className="contact-form__inputs"
                  type="text"
                  name="message"
                  onChange={handleInput}
                />
                <p className="contact-form__error">{formerrors.message}</p>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="contact-button contact-form-button"
                onClick={handleUser}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <h4 className="contact__body__main-title2">STOCKISTS</h4>
        <div className="row contact__body__three ">
          <div className="col-md-4 col-sm-6 col-12">
            <p className="contact-card1__data mb-3">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
              <br />
              123-456-7890
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <p className="contact-card1__data mb-3">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
              <br />
              123-456-7890
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <p className="contact-card1__data mb-3">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
              <br />
              123-456-7890
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <p className="contact-card1__data my-3">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
              <br />
              123-456-7890
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <p className="contact-card1__data my-3">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
              <br />
              123-456-7890
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <p className="contact-card1__data my-3">
              500 Terry Francois St.
              <br />
              San Francisco, CA 94158
              <br />
              123-456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
