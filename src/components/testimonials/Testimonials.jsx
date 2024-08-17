import React from 'react'
import "./testimonials.css"

import {testimonials} from "../../constants"

const Testimonials = () => {
  return (
    <>
    <div className="payWise__testimonials" id="about-us">
    <h3 className='payWise__testiomonials-header'>Hear from our customers</h3>
  
  <div className="payWise__testimonials-box section__padding">
  {
    testimonials.map((item,i)=>{
      return(
        <div className="payWise__testimonials-card" key={item.id} >
<img src={item.topLeft} alt="image" className="leftEdge"/>
<img src={item.bottomRight} alt="image"  className="rightEdge"/>



<div className="payWise__testimonials-card_content">
<img src={item.pic} alt="image" className="profilePic"/>
<img src={item.quote} alt="image" className="q" style={{position:'absolute',left:"5%",bottom:'80%'}}/>
<p>{item.content}</p>
<div className="payWise__testimonials_card-ratings">
<img src={item.star} alt="image"/>
<img src={item.star} alt="image"/>
<img src={item.star} alt="image"/>
<img src={item.star} alt="image"/>
<img src={item.star} alt="image"/>
</div>
</div>
<div className="payWise__testimonials-card_triangle"></div>
  </div>
      )
    })
  }
  </div>
  </div>
      
    </>
  )
}

export default Testimonials
