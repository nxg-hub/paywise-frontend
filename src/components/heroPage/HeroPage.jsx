import React from 'react'
import "./heroPage.css"
import {downloads } from '../../constants'
const HeroPage = () => {
  return (
    <>
      <div className="payWise__heroPage section__padding ">
        <div className="payWise__heroPage_header">
          <h2>The Ultimate App That Allows You <span>To Invest</span></h2>
         
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
