import React, { useState } from "react";
import Modals from "./Modals";
import Fade from "react-reveal/Fade";

const style = {
  textAlign: "center",
  position: "absolute",
  top: "47%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "5%",
  p: 4,

  img: {
    width: "100%",
    marginBottom: "30px",
    marginTop: "10px",
  },
  "@media (max-width: 767px)": {
    width: 400,
    marginTop: "15px",
  },
  "@media (max-width: 500px)": {
    width: 300,
    marginTop: "10px",
    height: 710,
  },
  "@media (max-width: 400px)": {
    width: 300,
    marginTop: "20px",
    height: 700,
  },
};

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState();
  const [description, setDesc] = useState();

  const handleOpen = () => {
    setTitle("Online Appointment System for Fernandez Dental Clinic");
    setDesc("Online Appointment System for Fernandez Dental Clinic");
    setOpen(true);
  };

  return (
    <div className="row">
      <Fade bottom>
      <div className="portfolio-item padd-15">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img" style={{cursor: 'pointer'}}>
            <img
              src="images/portfolio/FernandezDentalClinic.PNG"
              alt="portfolio"
              onClick={handleOpen}
              title="view details"
            />
            <h2>Online Dental Appointment System</h2>
            <Modals
              open={open}
              handleClose={handleClose}
              style={style}
              title={title}
              description={description}
            />
                  <div className="card-buttons">
                    {/* <div className="card-items">
                      <a href="http://localhost/I.TSpec%20Appointment%20System/index.php" target="_blank" rel="noreferrer">
                      <h3>Live Demo</h3>
                      <i className="fa-solid fa-eye"></i>
                      </a>
                    </div> */}
                    <div className="card-items">
                    <a href="https://github.com/BryanPalad/FernandezDentalClinic" target="_blank" rel="noreferrer">
                      <h3>Github</h3>
                      <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}
