import React from "react";
import "./Services.css";
import Fade from "react-reveal/Fade";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import webdevelopment from "./images/webdevelopment.jpg";
import resonsivedesign from "./images/responsivedesign.jpg";
import unknown from "./images/unknown.jpg";
import { Link } from "react-scroll";

export default function Services() {  
  const services = [
    {
      title: "Web Development",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque",
      img: `${webdevelopment}`,
    },
    {
      title: "Responsive Web Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque",
      img: `${resonsivedesign}`,
    },
    {
      title: "In Progress",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque",
      img: "",
    },
    // {
    //   title: "In Progress",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque",
    //   img: "",
    // },
    // {
    //   title: "In Progress",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque",
    //   img: "",
    // },
    // {
    //   title: "In Progress",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque",
    //   img: "",
    // },
  ];
  return (
    <section className="service section" id="3">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <Fade bottom>
              <h2>Services</h2>
            </Fade>
          </div>
        </div>
        <div className="row">
          {services.map(({title, desc, img}) => {
            return <div className="service-item padd-15">
            <div className="service-item-inner">
            <Card
                  sx={{      
                    maxWidth: 350,
                    boxShadow: "0 0 20px rgba(48, 46, 77, 0.15)",
                  }}
                >
                  <CardActionArea>
                    <Link
                      activeClass="active"
                      to="contact-title"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={img === "" ? `${unknown}`: `${img}`}
                        alt="services image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {desc}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              
            </div>
          </div>
          })}
        </div>
      </div>
    </section>
  );
}