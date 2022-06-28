import React, {useState, useEffect} from "react";
import Skills from "./Skills/Skills";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Qualifications from "./Qualifications/Qualifications";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import TrainingsAndCert from "./TrainingsAndCert/TrainingsAndCert";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Accomplishments from "./Accomplishments/Accomplishments";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AboutMe() {
  const [value, setValue] = React.useState(0);
  const [tabFont , setTabFont] = useState('15px');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    color: "var(--skin-color)",
    fontWeight: "500",
    fontFamily: "Poppins",
    fontSize: `${tabFont}`,
    padding: '0',
};
  useEffect(() => {
    function handleResize() {
      if (
        window.innerWidth <= 425) {
        setTabFont('11px');
      } else {
        setTabFont('15px');
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <section className="about section" id="2">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <Fade bottom>
              <h2>About Me</h2>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <Fade bottom>
                  <h3>
                    I'm Bryan Palad and a<span> Web Developer</span>
                  </h3>
                </Fade>
                <p>
                  BS Information Technology graduate year 2019, became a lead programmer on our 2 thesis projects and had an experience 
                  using C#, MySQL and PHP despite not having enough resources such as stable internet connection for self learning. Landed my first job in a non-tech company
                  where i spent almost 2 years and 3 months as an Admin Staff. I suddenly thought to myself, it's about time to get back to coding and so i've decided 
                  to leave my current job, move forward and pursue this programming career.
                </p>
              </div>
            </div>
            <div className="row">
              <PersonalInfo />
              <Qualifications />
            </div>
            <div className="row">
              <Skills />
            </div>
            {/* <div className="row">
              <Accomplishments />
            </div> */}
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} textColor="primary" aria-label="basic tabs example" TabIndicatorProps={{style: {backgroundColor:'var(--skin-color)'}}} centered>
                  <Tab label={<span style={tabStyle}>Experience</span>} {...a11yProps(0)} />
                  <Tab label={<span style={tabStyle}>Education</span>} {...a11yProps(1)} />
                  <Tab label={<span style={tabStyle}>Trainings</span>} {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Experience/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Education/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TrainingsAndCert />
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
