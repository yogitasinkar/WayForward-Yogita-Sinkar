/* 
  DURING CALL
*/


import React, {useState, useRef} from 'react'
import { useEffect } from 'react'

 
export const HelloWorld = () => {
    const [progress, setProgress] = useState(0)
    const [start, setStart] = useState(false)


    useEffect(() => {
      if(start){
        for(let i=1; i<=10; i++){
          setTimeout(() => {
            setProgress((progress) => {
              return progress + 10;
            });
          }, i*1000);
        }

      }
    }, [start])

    const handleClick = () =>{     
      setStart(true); 
    }

    return (
      <>
        <div
          style={{
            width: "110%",
            border: "1px solid black",
            height: "32px",
            borderRadius: "12px",
            zIndex: 2,
            backgroundColor: "#d3d3d3"
          }}
        >
          <div
            style={{
              height: "30px",
              width: `${progress}%`,
              backgroundColor: "green",
              zIndex: 1,
              borderRadius: "12px"
            }}
          >
            {progress >= 10 ?
              <div className="percent">{progress}%</div> :
              null
            }
          </div>
        </div>
        <button style={{ 
          backgroundColor: "blue", 
          marginLeft:"10px", 
          color: "white",
          paddingLeft: "20px",
          paddingRight: "20px"
          }} 
          onClick={handleClick}>
          START
        </button>
      </>
    );
}
