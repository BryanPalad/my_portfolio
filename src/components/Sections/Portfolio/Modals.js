import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { modalObj } from '../../../constants/portfolio';

export default function Modals({
  open,
  handleClose,
  style,
  title,
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
                {modalObj[0].sliderImg.map((item, index) => {
                  return <img src={item.source} alt='portfolio' key={index}/>
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
                      {modalObj[1].functionsList.map((item, index) => {
                        return <li key={index}>{item.functions}</li>
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
                        {modalObj[2].toolsUsed.map((item, index) => {
                          return <img src={item.toolImage} alt={item.desc} key={index}/>
                        })}
                      </div>
                    </div>
                    {/* <div className="programming-demo-btn">
                      <div className="row">
                        <a
                          className="demo"
                          href="http://localhost/I.TSpec%20Appointment%20System/index.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo <i className="fa-solid fa-eye"></i>
                        </a>
                        <a
                          className="git"
                          href="https://github.com/BryanPalad/FernandezDentalClinic"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div> */}
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
