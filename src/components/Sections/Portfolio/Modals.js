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

  const sliderImg = [
    {
      source:'images/portfolio/FernandezDentalClinic.PNG',
    },
    {
      source:'images/portfolio/fdc_signup.PNG',
    },
    {
      source:'images/portfolio/fdc_patient.PNG',
    },
    {
      source:'images/portfolio/fdc_appointment.PNG',
    },
    {
      source:'images/portfolio/FDC_dashboard.PNG',
    }
  ];

  const functionsList = [
    {
        functions: '*Email Verification at Registration.'
    },
    {
        functions: '*Book an Appointment based on available time and date created by the dentists.'
    },
    {
        functions: '*Automated SMS Notification for Approved and Upcoming Appointments.'
    },
    {
        functions: '*Data or images can be modified through systems backend.'
    },
  ];

  const toolsUsed = [
    {
      toolImage: '../../../images/php.png',
      desc: 'php',
    },
    {
      toolImage: '../../../images/css.png',
      desc: 'css',
    },
    {
      toolImage: '../../../images/bootstrap.png',
      desc: 'bootstrap',
    },
    {
      toolImage: '../../../images/mysql.png',
      desc: 'mysql',
    },
    {
      toolImage: '../../../images/sublime.png',
      desc: 'sublime',
    },

  ]
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
                {sliderImg.map(({source}) => {
                  return <img src={source} alt='portfolio'/>
                })}
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
                      {functionsList.map(({functions}) => {
                        return <li>{functions}</li>
                      })}
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
                        {toolsUsed.map(({toolImage, desc}) => {
                          return <img src={toolImage} alt={desc}/>
                        })}
                      </div>
                    </div>
                    <div className="programming-demo-btn">
                      <div className="row">
                        {/* <a
                          className="demo"
                          href="http://localhost/I.TSpec%20Appointment%20System/index.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo <i className="fa-solid fa-eye"></i>
                        </a> */}
                        <a
                          className="git"
                          href="https://github.com/BryanPalad/FernandezDentalClinic"
                          target="_blank"
                          rel="noreferrer"
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
