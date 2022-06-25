import React from "react";
import "./ContactMe.css";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { selectContactInfo } from '../../../redux/contact/contactSlice';

import Fade from "react-reveal/Fade";
export default function ContactMeData({
  form,
  handleSubmit,
  formValues,
  handleChange,
  formErrors,
  ing,
  loading,
  audioPlayer,
  NotificationSound,
}) {
  const contactInfo = useSelector(selectContactInfo);

  return (
    <section className="contact section" id="5">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <Fade bottom>
              <h2 className="contactme-title">Contact Me</h2>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <h3 className="contact-title padd-15">Do You Have Any Questions ?</h3>
          <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
          <div className="row">
            {contactInfo.map((item, index) => {
              return (
                <div className="contact-info-item padd-15" key={index}>
                  <div className="icon">
                    {item.style ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <i className={item.icon} style={{ fontSize: "25px" }}></i>
                      </a>
                    ) : (
                      <>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <i className={item.icon}></i>
                        </a>
                      </>
                    )}
                    {item.image ? <img src={item.image} alt="pic"></img> : <></>}
                  </div>
                  <h4>{item.heading}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I'M VERY RESPONSIVE TO MESSAGES
          </h4>
        </Fade>
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
                      placeholder="Your Email"
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
                  <Fade bottom>
                    <button type="submit" className="btn">
                      {" "}
                      Send{ing} Message{" "}
                      <ClipLoader color={"white"} loading={loading} size={10} />
                      <audio ref={audioPlayer} src={NotificationSound} />
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <!-- Contact Form End --> */}
      </div>
    </section>
  );
}