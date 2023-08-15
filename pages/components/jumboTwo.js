import React from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import cridflixAnimation from "./animation.json";

// const style = {
//     height: "100vh",
//   };

const options = {
animationData: cridflixAnimation,
};

const JumboTwo = () => {
    const lottieObj = useLottie(options);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
            visibility: [1, 0.1],
            type: "stop",
            frames: [0],
          },
        {
            visibility: [.1, 1],
            type: "seek",
            frames: [1, 40],
          },
        //   {
        //     visibility: [.95, 1],
        //     type: "loop",
        //     frames: [41, 45],
        //   }
      ],
    });
  
    return Animation;
  };

export default JumboTwo;