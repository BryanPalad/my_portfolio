import React from "react";
import Fade from "react-reveal/Fade";
import "./accomplishments.css";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      '/images/portfolio/cert1.PNG',
  },
  {
    imgPath:
      '/images/portfolio/cert2.PNG',
    },
    {
    imgPath:
      '/images/portfolio/cert3.PNG',
  },
  {
    imgPath:
      '/images/portfolio/cert4.PNG',
  },
  {
    imgPath:
      '/images/portfolio/cert5.jpg',
  },
];

export default function Accomplishments() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  return (
    <>
    <div className="accomplishments padd-15">
      <h3 className="title">My Accomplishments</h3>
      <div className="row">
      <Fade bottom>
      <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
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
    </Box>
    </Fade>
      </div>
    </div>
    </>
  );
}
