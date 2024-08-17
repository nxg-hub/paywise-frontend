import React from 'react'
import "./newsLetter.css"
import email from "../../assets/email.svg";




const NewsLetter = () => {
  return (
    <div className='section__padding payWise__newsLetter-container'>
    <div className="paywise__newsletter">
      <h3>Subscribe on our Newsletter</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in orci quis eleifend id. Adipiscing cras scelerisque aliquet nisi, velit, aliquam tortor vestibulum.</p>
      <form>
        <div className="form">
          <img src={email} alt="images" />
        <input placeholder='Email Adress' type='email' />
        <button type="submit">Subscribe</button>
        </div>
        <p>We will never spam you. Only useful mails with promo and events</p>
      </form>
    </div>
    </div>
  )
}

export default NewsLetter
