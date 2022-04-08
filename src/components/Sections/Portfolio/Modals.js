import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Modals({
  open,
  handleClose,
  style,
  title,
  description,
}) {
  return (
    <>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
          <Typography id="modal-modal-title" variant="h5" component="h1">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="slide-container">
              <Slide duration={2000} transitionDuration={800}>
                <img
                  src="images/portfolio/FernandezDentalClinic.PNG"
                  alt="portfolio"
                />
                <img src="images/portfolio/fdc_signup.PNG" alt="portfolio" />
                <img src="images/portfolio/fdc_patient.PNG" alt="portfolio" />
                <img
                  src="images/portfolio/fdc_appointment.PNG"
                  alt="portfolio"
                />
                <img src="images/portfolio/FDC_dashboard.PNG" alt="portfolio" />
              </Slide>
              <hr className="horizontal-line" />
            </div>

            <div className="functions">
              <div className="row">
                <div className="col">
                  <div className="function-heading">
                    <h4 className="main-programming-function">
                      Main Functions
                    </h4>
                    <ul className="function-desc">
                      <li>Login / Sign up Patients.</li>
                      <li>Email Verification at Registration.</li>
                      <li>
                        Book an Appointment based on available time and date
                        created by the dentists.
                      </li>
                      <li>
                        Automated SMS Notification for Approved and Upcoming
                        Appointments.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="programming-heading">
                    <h4 className="main-programming-function">
                      Programming / Tools Used
                    </h4>
                    <div className="row">
                      <div className="programming-tools">
                        <img src="../../../images/php.png" alt="php"></img>
                        <img src="../../../images/css.png" alt="css"></img>
                        <img
                          src="../../../images/bootstrap.png"
                          alt="bootstrap"
                        ></img>
                        <img src="../../../images/mysql.png" alt="mysql"></img>
                        <img
                          src="../../../images/sublime.png"
                          alt="sublime"
                        ></img>
                      </div>
                    </div>
                    <div className="programming-demo-btn">
                      <div className="row">
                        <a
                          className="demo"
                          href="http://localhost:8080/I.TSpec%20Appointment%20System/index.php"
                          target="_blank"
                        >
                          Demo <i className="fa-solid fa-eye"></i>
                        </a>
                        <a
                          className="git"
                          href="https://github.com/BryanPalad/FernandezDentalClinic"
                          target="_blank"
                        >
                          Github <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
