// BackgroundWrapper.js

import React from 'react';

const BackgroundWrapper = ({ children, videoSource }) => {
  return (
    <div className="relative">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-sm"
        autoPlay
        loop
        muted
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
