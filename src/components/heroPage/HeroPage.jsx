import React,{useState,useEffect}from 'react'
import "./heroPage.css"
import {downloads } from '../../constants'

const HeroPage = () => {

  const titles =['SPEND','SAVE','INVEST']

  const [currentIndex,setCurrentIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('down');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
       setDirection(direction === 'down' ? 'up' : 'down');

      setTimeout(() => {
        setCurrentIndex(nextWordIndex);
        setNextWordIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500); 
    }, 3000);

    return () => clearInterval(interval); 
  }, [direction,nextWordIndex, titles.length]);

  return (
    <>
      <div className="payWise__heroPage section__padding " id="home">
        <div className="payWise__heroPage_header">
          <h2>The Ultimate App That Allows You  <div className="rotating-word-container">
          <span className={`rotating-word ${isAnimating ? `out-${direction}` : ''}`}
           style={{ opacity: isAnimating ? 0 : 1 }}
          >
            {titles[currentIndex]}
          </span>
          <span className={`rotating-word ${isAnimating ? `in-${direction}` : ''}`}
             style={{ opacity: isAnimating ? 1 : 0 }}
          >
            {titles[nextWordIndex]}
          </span>
        </div>
        </h2>
         
        </div>
        <div className="payWise__heroPage_downloads">
          {
            downloads.map((item,i)=>{
              return(
                <div className="payWise__heroPage_downloads-links" key={i}>
                  <img src={item.img} alt="image"/>
                  <p>{item.cta} <span>{item.store}</span></p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default HeroPage
