import appStore from "../assets/appstore.svg"
import arrows from "../assets/arrows.svg"
import email from "../assets/foot-email.svg"
import community from "../assets/community.svg"
import currency from "../assets/currency.svg"
import heart from "../assets/heart.svg"
import investments from "../assets/investments.svg"
import phone1 from "../assets/iphon12-1.svg"
import phone2 from "../assets/iphon12-2.svg"
import phone3 from "../assets/lastPhone.svg"
import playstore from "../assets/playstore.svg"
import pic1 from "../assets/profile-pic1.svg"
import pic2 from "../assets/profile-pic2.svg"
import quote from "../assets/quote.svg"
import security from "../assets/security.svg"
import star from "../assets/Star 1.svg"
import technology from "../assets/technology.svg"
import vector from "../assets/Vector.svg"
import bottomRight from "../assets/vectorBottomRight.svg"
import topLeft from "../assets/leftEdge.svg"
import facebook from "../assets/Facebook.svg"
import google from "../assets/Google.svg"
import twitter from "../assets/Twitter.svg"
import linkedIn from "../assets/linkedin.svg"

 const images ={
appStore:appStore,
ppl:community,
cash:currency,
heart:heart,
invest: investments,
phone1:phone1,
phone2:phone2,
phone3:phone3,
play: playstore,
pic1:pic1,
pic2:pic2,
quote:quote,
security:security,
star:star,
tech: technology,
vector: vector,
topLeft:topLeft,
bottomRight:bottomRight,
facebook:facebook,
twitter:twitter,
linkedIn:linkedIn,
google:google,
email:email
}




export const downloads = [
    {
       img: images.play,
        cta: "Get on ",
        store: "Playstore"
    },
    {
        img:images.appStore,
        cta:"Get on ",
         store: "App Store"
    }
]


export const services = [
    {
        id:0,
        header: "Spend and Pay Bills",
        paragraph:"Effortless bill payments on Paywise: Save time, enjoy convenience, and stay organized while managing your expenses seamlessly. You can buy airtime, data, fund bet accounts and pay bills with a few clicks! ",
        img:images.phone1
    },
    {
        id:1,
        header: "Invest",
        paragraph: " Investing cultivates wealth: Grow assets, seize opportunities, and secure your financial future. Let your money work for you today. At Paywise you can invest in a variety of stock, and buy shares from leading global companies. Not sure what to invest in? You can copy the portfolio of leading investors!",
       img:images.phone2
    },
    {
        id:2,
        header: 'Save',
        secondHeader:["Contingent savings","Personal Savings","Pair Savings","Group Savings"],
        paragraph:["With Paywise contingent savings you can now save for emergencies.Funds saved in contingent savings are instantly withdrawable. Allowing you sort of your emergencies as they arise!"," Personal savings provide financial stability, and opportunities fo growth. With personal savings you fund your dreams. At Paywise we offer the best interest rates on savings, up to 13% pa. Start saving with Paywise today!"," Collaborate with your friend or spouse for bigger investments, shared experiences, and mutual growth. Pool resources to achieve financial milestones."," Pool funds, boost accountability, and achieve dreams together. Multiply savings for mutual success and progress."],
        img:images.phone3
    }
]


export const features = [
    { 
        id:1,
        img:images.tech,
        header:"Innovative Technology",
        body: " Embrace the future with our cutting-edge technology that simplifies investing and saving. Our user-friend platform ensures that you're always in control, no matter your level of financial expertise."
    },
    {
        id:2,
        img:images.invest,
        header:"Diverse Investment Options",
        body: "We offer a wide array of investment opportunities tailored to your risk tolerance and financial ambitions. Whether you're aiming for short-term gains or long-term wealth accumulation, we have the perfect options for you."
    },
    {
        id:3,
       img:images.security,
        header: "Secure and Transparent",
        body:" Your security is our top priority. Our platform employs the latest security measures to safeguard your information and transactions. Plus, we're committed to complete transparency, ensuring you have a clear view of how your money is working for you."
    },
    {
        id:4,
        img:images.ppl,
        header:"Community and Support",
        body:"Join a community of like-minded individuals who are also on their journey to financial success. Plus, our customer support team is always ready to assist you, ensuring that you're never alone on this path."
    }
]

export const testimonials =[
    {
        id:1,
        topLeft:images.topLeft,
        bottomRight:images.bottomRight,
        pic:images.pic1,
        quote:images.quote,
        star:images.star,
        content:['"A Game-Changer for My Finances!"','"Switching to Paywise has completely transformed how I manage my money. The real-time notifications and budget tracking features keep me on top of everything. I can’t imagine going back to my old way of doing things."','"— Mark S., Freelance Designer"']
        

    },
    {
        id:2,
        topLeft:images.topLeft,
        bottomRight:images.bottomRight,
        pic:images.pic2,
        quote:images.quote,
        star:images.star,
       content:['"Seamless and Reliable!"','"I’ve been using Paywise for all my transactions, and it has never let me down. The app is easy to use, and the customer support is fantastic. Whether I’m paying bills or transferring money, I know I’m in good hands."',
        '"— Jane D., Small Business Owner"',
       ]
    }
]

export const navLinks =[
    {
        id:"#home",
        title:"home"
    },
    {
        id:"#about-us",
        title:"About Us"
    },
    {
        id:"#Features",
        title:"Features"
    },
    {
        id:"#contact-us",
        title:"Contact Us"
    },
]

export const logos =[
    {
        img: images.facebook
    },
    {
        img:images.twitter
    },
    {
        img:images.linkedIn
    },
    {
        img:images.google
    },
    {
        img:images.email
    },
   
]