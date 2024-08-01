import React from 'react'
import { Footer, Introduction, Navbar, NewsLetter, Services, Testimonials } from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Services/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>  
    </div>
  )
}

export default App
