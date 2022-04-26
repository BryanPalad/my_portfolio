import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as programming from "../93857-abstract-modular-cube-1.json";
import App from "../App";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: programming.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function LoadingScreen() {
  const [completed, setCompleted] = useState(undefined);
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setCompleted(true);
      }, 1000);
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <Lottie
          options={defaultOptions1}
          style={{ marginTop: "20%" }}
          height={200}
          width={200}
        />
      ) : (
        <>
          <App />
        </>
      )}
    </>
  );
}

export default LoadingScreen;
