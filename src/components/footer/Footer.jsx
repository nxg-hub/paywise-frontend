import React from 'react'
import "./footer.css"
import logo from "../../assets/Vector.svg";

import { navLinks,logos} from '../../constants';
const Footer = () => {
  return (
    <>
      <div className="payWise__footer section__padding">
    <div className="payWise__footer-header">
      <img src={logo} alt="image" className="footerLogo"/>
      <p>© 2022 All rights reserved</p>
    </div>
    <div className="payWise__footer-links">
     
     <ul >
      {
        navLinks.map((item,i)=>{
          
          return(
            
            <>
           
              <li><a key={item.id}href={item.id}>{item.title}</a></li>
              
          </>
         
          )
          
        })
      }
       </ul>
      
      
        <ul >
          <li><a>Privacy Policy</a> </li>
          <li><a>Terms of Conditions</a></li>
        </ul>
        
      </div>
    
    <div className="payWise__footer-icons">
      {
        logos.map((item,i)=>(<img key={i} src={item.img} alt='images'/>))
      }
    </div>
      </div>
    </>
  )
}

export default Footer
