import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as programming from "../93857-abstract-modular-cube-1.json";
import App from "../App";

const loadingAnimation = {
  loop: true,
  autoplay: true,
  animationData: programming.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function LoadingScreen() {
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
        setCompleted(true);
    }, 2500);
  }, []);

  return (
    <>
      {!completed ? (
        <div className="container" style={{justifyContent: 'center', alignItems: 'center'}}>
        <Lottie
          options={loadingAnimation}
          style={{ marginTop: "28%" }}
          height={300}
          width={300}
        />
        </div>
      ) : (
        <>
          <App />
        </>
      )}
    </>
  );
}

export default LoadingScreen;
