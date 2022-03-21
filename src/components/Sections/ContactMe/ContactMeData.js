import React from "react";
import "./ContactMe.css";
import ScrollUpButton from "react-scroll-up-button";
import { ClipLoader } from "react-spinners";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function ContactMeData({
  form,
  handleSubmit,
  formValues,
  handleChange,
  formErrors,
  ing,
  loading,
}) {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Do You Have Any Questions ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
        <div className="row">
          {/* <!-- Contact info item start --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4>Call/Text Me On</h4>
            <p>+63 945-560-2846</p>
          </div>
          {/* <!-- Contact info item end --> */}
          {/* <!-- Contact info item start --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a href="https://www.facebook.com/BryanPalad.15" target="_blank">
                <i
                  className="fab fa-facebook-square"
                  style={{ fontSize: "25px" }}
                ></i>
              </a>
            </div>
            <h4>Facebook</h4>
            <p>/BryanPalad.15</p>
          </div>
          {/* <!-- Contact info item end --> */}
          {/* <!-- Contact info item start --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"></img>
            </div>
            <h4>Email</h4>
            <p>paladbryanj@gmail.com</p>
          </div>
          {/* <!-- Contact info item end --> */}
          {/* <!-- Contact info item start --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <a href="https://github.com/BryanPalad" target="_blank">
                <i className="fab fa-github" style={{ fontSize: "25px" }}></i>
              </a>
            </div>
            <h4>Github</h4>
            <p>/BryanPalad</p>
          </div>
          {/* <!-- Contact info item end --> */}
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I'M VERY RESPONSIVE TO MESSAGES
        </h4>
        {/* <!-- Contact Form Start --> */}
        <form ref={form} onSubmit={handleSubmit}>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="fullname"
                      value={formValues.fullname}
                      onChange={handleChange}
                    />
                  </div>
                  <p> {formErrors.fullname}</p>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                  <p> {formErrors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <p> {formErrors.subject}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <p> {formErrors.message}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">
                    {" "}
                    Send{ing} Message{" "}
                    <ClipLoader color={"white"} loading={loading} size={10} />
                  </button>
                  <NotificationContainer />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <!-- Contact Form End --> */}
      </div>
      <ScrollUpButton />
    </section>
  );
}
