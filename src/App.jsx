import React from 'react'
import { Footer, HeroPage, Navbar, NewsLetter, Services, Testimonials } from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <Services/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>  
    </div>
  )
}

export default App
