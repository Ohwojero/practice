import React from 'react'
import './Home.css'
import Mainheader from '../../components/Mainheader'
import Programs from '../../components/Programs'
import Sectionhead from '../../components/Sectionhead'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <div>
      <>
      <Mainheader />
      <Programs />
      <Sectionhead />
      <Values />
      <FAQs />
      <Testimonials />
      
      </>
    </div>
  )
}

export default Home