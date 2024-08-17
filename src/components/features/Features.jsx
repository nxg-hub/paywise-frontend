import React,{useEffect, useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import "./features.css"

import {features} from "../../constants"

const Features = () => {
const [currentIndex,setCurrentIndex] = useState(0);
const [isAnimating,setIsAnimating] = useState(false);

const isSmallScreen = useMediaQuery({query:'(max-width:768px)'});

useEffect(()=>{
    const interval = setInterval(()=>{
        setIsAnimating(true);
        setTimeout(()=>{
            setIsAnimating(false);
            setCurrentIndex((prevIndex) => prevIndex === features.length -1 ? 0 : prevIndex + 1);
        },500);
       
    },3000)

    return () => 
        clearInterval(interval)
},[features.length])



    return(
        <>
    <div className="payWise__feature-container ">
        {isSmallScreen ? (
            <div className="feature-box">
            <div className={`feature-box-items ${isAnimating?'slide-out':'slide-in'}`}>
                {<img src={features[currentIndex].img}/>}
                <div  className='payWise__features-content'>
                 <h3>{features[currentIndex].header}</h3>   
                <p>{features[currentIndex].body}</p>
                </div>
            </div>
            </div>
        ): (
        
        <div className="payWise__features"
        style={{transform:`translate(-${currentIndex * 50}%)`}}
        >
            {features.map((item,i)=>(
                <div key={i}
                className={`feature-box ${currentIndex === i ? 'active': ''}`}
                >
                    <div className="feature-box-items">
               <img src={item.img} alt="images" />
                        <div className="payWise__features-content">
                            <h3>{item.header}</h3>
                            <p>{item.body}</p>
                        </div>
                        </div>
                    </div>
            ))}
        </div>

        )}
        <div className="payWise__features-indicators">
            {
                features.map(( _, i ) =>(
                    <div key={i}
                    className={`indicator ${currentIndex === i ? 'active' : ''}`}
                    ></div>
                ) )
            }
        </div>
    </div>
        </>
    )
}

export default Features
