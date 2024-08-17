import React,{useState,useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import "./services.css"
import { services} from '../../constants';
import Box from '../box/Box';
import Features from '../features/Features';
const Services = () => {

  const isSmallScreen = useMediaQuery({query:'(max-width:820px)'})
  const isMidScreen = useMediaQuery({query:'(max-width:912px)'})

  return (
    <>
     <div className="payWise__services  section__padding" id="Features">
      <h2>Our Services</h2>
     <div className="payWise__services-container">

          {
            services.map((item,i)=>{
              let className = ''
              if (i === 0 && i === 1){
                  className =  "serviceImg "
              }else if (i === 1){
                className = isSmallScreen ? 'smallImg': 'img serviceImg';
                  className = isMidScreen? 'midImg': 'img serviceImg '
              } 
                else if (i === 2){
                  className = 'img'
                }
              else{
                className= 'img serviceImg '
              }
              return(
            <>
            
           
             <Box key={item.id} item={item} index={i} className={className}/>
           
            </>
            )
})
          }
         
         
        
          </div>
   <Features/>
     </div>
    </>
  )
}

export default Services
