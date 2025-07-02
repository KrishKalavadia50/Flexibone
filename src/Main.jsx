import React from 'react'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Articles from './Components/Articles'
import Contact from './Components/Contact'
import Feedbackpopup from './Components/Feedbackpopup'
import Footer from './Components/Footer'
import Services_info from './Components/Services_info'

function Main() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Articles />
      <Contact />
      {/* <Feedbackpopup /> */}
      <Footer />
    </div>
  )
}

export default Main
