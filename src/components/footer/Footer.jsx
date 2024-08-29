import React from 'react'
import "./footer.css"
import logo from "../../assets/Vector.svg";
import { AiTwotoneMail } from "react-icons/ai";
import { navLinks,logos} from '../../constants';
const Footer = () => {
  return (
    <>
      <div className="payWise__footer section__padding">
    <div className="payWise__footer-header">
      <img src={logo} alt="image" className="footerLogo"/>
      <p>© 2024 All rights reserved</p>
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
        logos.map((item,i)=>(<a href="#"><img key={i} src={item.img} alt='images'/></a>))
      }
      <AiTwotoneMail />
    </div>
      </div>
    </>
  )
}

export default Footer
