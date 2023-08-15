import Lottie from 'react-lottie-player'
import LottieLight from 'react-lottie-player/dist/LottiePlayerLight'

import React, { useState, useRef, useEffect } from 'react';

import lottieJson from './animation.json';

// const boxStyle = { boxShadow: '0 0 10px 10px rgba(0,0,0,0.03)', width: 200, maxWidth: '100%', margin: 30, padding: 30, borderRadius: 7, display: 'flex', flexDirection: 'column' };

const ScrollTest = ({ Component }) => {
  const scrollRef = useRef();
  const [animationPosition, setAnimationPosition] = useState(0);

  useEffect(() => {
    function handleScroll(e) {
      setAnimationPosition(Math.max((0, e.target.scrollTop - 55) * 0.3));
    }
    const scroller = scrollRef.current
    scroller.addEventListener('scroll', handleScroll);

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: 500, overflowY: 'scroll' }}>
      <Component
        animationData={lottieJson}
        goTo={animationPosition}
        // useSubframes={useSubframes}
        style={{ alignSelf: 'center' }}
      />
    </div>
  )
};

export default function App() {
    const [useLottieLight, setUseLottieLight] = useState(false);
    // const [useSubframes, setUseSubframes] = useState();
  
    const Component = useLottieLight ? LottieLight : Lottie;
  
    return (
      <>    
          <ScrollTest Component={Component}  />
      </>
    );
  }