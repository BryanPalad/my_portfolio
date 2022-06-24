import React from "react";
import Fade from "react-reveal/Fade";
import "./accomplishments.css";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    // label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/images/portfolio/cert1.PNG',
  },
  {
    // label: 'Bird',
    imgPath:
      '/images/portfolio/cert2.PNG',
  },
  {
    // label: 'Bali, Indonesia',
    imgPath:
      '/images/portfolio/cert3.PNG',
  },
  {
    // label: 'Goč, Serbia',
    imgPath:
      '/images/portfolio/cert4.PNG',
  },
  {
    // label: 'Goč, Serbia',
    imgPath:
      '/images/portfolio/cert5.jpg',
  },
];

export default function Accomplishments() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // const maxSteps = images.length;
  
    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  return (
    <>
    <div className="accomplishments padd-15">
      <h3 className="title">My Accomplishments</h3>
      <div className="row">
      <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
        resistance={true}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 350,
                  display: 'block',
                  maxWidth: 500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
      {/* <div className="skill-item padd-15">
     
        </div> */}
      </div>
    </div>
    </>
  );
}
