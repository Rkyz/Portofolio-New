import React from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const splineConfig = {
    scene: 'https://prod.spline.design/RTSdVcMzSsQGGasA/scene.splinecode',
    style: {
        width: '100%',
        height: '500px'
    }
  };

  return <Spline {...splineConfig} />;
}
