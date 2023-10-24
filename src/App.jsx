// import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import Skills from "./components/Skills"
import Skill2 from "./components/Skill2"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Wave from "./components/Wave"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Wave />
      {/* <Skills /> */}
      <Skill2 />
      <About />
      <Projects />
      <Wave />
      <Footer />
    </>
  )
}

export default App