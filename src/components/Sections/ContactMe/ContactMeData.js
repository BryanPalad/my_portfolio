import React from "react";
import "./ContactMe.css";
import { ClipLoader } from "react-spinners";
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
  const contactinfo = [
    {
      icon: "fa fa-phone",
      heading: "Call/Text Me On",
      desc: "+63 945-560-2846",
      image: false,
      link: false,
      style: false,
    },
    {
      icon: false,
      heading: "Email",
      desc: "paladbryanj@gmail.com",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
      link: false,
      style: false,
    },
    {
      icon: "fab fa-facebook-square",
      heading: "Facebook",
      desc: "/BryanPalad.15",
      image: "",
      link: "https://www.facebook.com/BryanPalad.15",
      style: true,
    },
    {
      icon: "fa-brands fa-linkedin",
      heading: "Linkedin",
      desc: "Bryan-Justin-Palad",
      image: "",
      link: "https://www.linkedin.com/in/bryan-justin-palad-4632b3234/",
      style: true,
    },
  ];
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
            {contactinfo.map(({ icon, heading, desc, image, link, style }) => {
              return (
                <div className="contact-info-item padd-15">
                  <div className="icon">
                    {style ? (
                      <a href={link} target="_blank" rel="noreferrer">
                        <i className={icon} style={{ fontSize: "25px" }}></i>
                      </a>
                    ) : (
                      <>
                        <a href={link} target="_blank" rel="noreferrer">
                          <i className={icon}></i>
                        </a>
                      </>
                    )}
                    {image ? <img src={image} alt="pic"></img> : <></>}
                  </div>
                  <h4>{heading}</h4>
                  <p>{desc}</p>
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
