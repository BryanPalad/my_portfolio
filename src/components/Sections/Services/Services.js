import React from "react";
import "./Services.css";
import Fade from "react-reveal/Fade";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-scroll";
import {servicesObj} from '../../../constants/services';
export default function Services() {  
 
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
          {servicesObj.map((item, index) => {
            return <div className="service-item padd-15" key={index}>
            <div className="service-item-inner">
              <Fade bottom>
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
                        image={`${item.img}`}
                        alt="services image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
                </Fade>
            </div>
          </div>
          })}
        </div>
      </div>
    </section>
  );
}