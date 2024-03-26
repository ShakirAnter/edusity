import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What we offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What students say' />
        <Testimonials />
        <Title subTitle='Contact us' title='Get in touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
