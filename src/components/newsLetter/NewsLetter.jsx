import React from 'react'
import "./newsLetter.css"
import email from "../../assets/email.svg";




const NewsLetter = () => {
  return (
    <div className='section__padding payWise__newsLetter-container'>
    <div className="paywise__newsletter">
      <h3>Subscribe to our Newsletter</h3>
      <p>Don't miss out on the latest updates from Paywise! By subscribing to our newsletter, you’ll be the first to know about:
       
      </p>
      <ul>
          <li><strong>New Features:</strong> Stay ahead with notifications about our latest tools and improvements designed to make your payments faster and more secure.</li>
          <li><strong>Exclusive Offers:</strong> Receive special deals, discounts, and promotions available only to our subscribers.</li>
          <li><strong>Expert Tips:</strong> Get valuable insights on managing your finances, maximizing savings, and more.</li>
        </ul>
      <p>Subscribe Today and take control of your financial future!
      Your privacy is our priority. Unsubscribe anytime.</p>
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
