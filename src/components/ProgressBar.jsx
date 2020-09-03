/*
    REMOVED FOR LOOP,
    Using useEffect to execute setTimeout multiple times.

*/

import React, { useState, useEffect } from "react";


const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);


  useEffect(() => {
    if (start && progress < 100) {
      setTimeout(() => {
        setProgress((progress) => {
          return progress + 10;
        });
      }, 1000);
    }
  }, [progress,start]);

  const handleClick = () => {
    setStart(true);  
  };

  return (
    <>
      <div className="progress-div"
      >
        <div
            style={{
              height: "30px",
              width: `${progress}%`,
              backgroundColor: "green",
              zIndex: 1,
              borderRadius: "12px"
            }}>
          {progress >= 10 ? <span className="percent">{progress}%</span> : null}
        </div>
      </div>
      <button
        style={{
          backgroundColor: "blue",
          marginLeft: "10px",
          color: "white",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        onClick={handleClick}
      >
        START
      </button>
    </>
  );
};


export default ProgressBar;