import {playStore,appStore,phone1,phone2,phone3,technology,investments,security,community,vector1,vector2,pic1,pic2,quote, star,} from "./assets/images"

export const downloads = [
    {
        img: playStore,
        cta: "Get on Playstore",
    },
    {
        img:appStore,
        cta:"Get on App Store"
    }
]


export const services = [
    {
        id:1,
        header: "Spend and Pay Bills",
        paragraph: "Effortless bill payments on Paywise: Save time, enjoy convenience, and stay organized while managing your expenses seamlessly. You can buy airtime, data, fund bet accounts and pay bills with a few clicks! ",
        img:phone1
    },
    {
        id:2,
        header: "Invest",
        paragraph: " Investing cultivates wealth: Grow assets, seize opportunities, and secure your financial future. Let your money work for you today. At Paywise you can invest in a variety of stock, and buy shares from leading global companies! Not sure what to invest in? You can copy the portfolio of leading investors!",
        img:phone2,
    },
    {
        id:3,
        header: 'Save',
        content:[
            {
                header: "Contingent Savings",
                paragraph:"With Paywise contingent savings you can now save for emergencies.Funds saved in contingent savings are instantly withdrawable. Allowing you sort of your emergencies as they arise!"
            },
            {
                header: "Personal Savings",
                paragraph:"Personal Savings  provide financial stability, and opportunities fo growth. With personal savings you fund your dreams. At Paywise we offer the best interest rates on savings, up to 13% pa.Start saving with Paywise today!"
            },
            {
                header: "Pair Savings",
                paragraph: " Collaborate with your friend or spouse for bigger investments, shared experiences, and mutual growth. Pool resources to achieve financial milestones."

            }
        ],
        img:phone3
        
    }
]

export const testimonials = [
    {
        id:1,
    topLeft:vector1,
    bottomRight:vector2,
    quotes:quote,
    pic: pic1,
    stars: star
    },
    {
        id:2,
    topLeft:vector2,
    bottomRight:vector2,
    quotes: quote,
    pic: pic2,
    stars:star
    }

]

export const features = [
    { 
        id:1,
        img: technology,
        header:"Innovative Technology",
        body: " Embrace the future with our cutting-edge technology that simplifies investing and saving. Our user-friend platform ensures that you're always in control, no matter your level of financial expertise."
    },
    {
        id:2,
        img: investments,
        header:"Diverse Investment Options",
        body: "We offer a wide array of investment opportunities tailored to your risk tolerance and financial ambitions. Whether you're aiming for short-term gains or long-term wealth accumulation, we have the perfect options for you."
    },
    {
        id:3,
        img:security,
        header: "Secure and Transparent",
        body:" Your security is our top priority. Our platform employs the latest security measures to safeguard your information and transactions. Plus, we're committed to complete transparency, ensuring you have a clear view of how your money is working for you."
    },
    {
        id:4,
        img:community,
        header:"Community and Support",
        body:"Join a community of like-minded individuals who are also on their journey to financial success. Plus, our customer support team is always ready to assist you, ensuring that you're never alone on this path."
    }
]

export const links =[
    {
        id:"home",
        title:"home"
    },
    {
        id:"about us",
        title:"About Us"
    },
    {
        id:"Features",
        title:"Features"
    },
    {
        id:"contact us",
        title:"Contact Us"
    }
]