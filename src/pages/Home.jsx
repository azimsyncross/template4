import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import Features from '../components/sections/Features'
import FeatureCards from '../components/sections/FeatureCards'
import Features2 from '../components/sections/Features2'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import CallToAction from '../components/sections/CallToAction'
import Clients from '../components/sections/Clients'
import Stats from '../components/sections/Stats'
import Pricing from '../components/sections/Pricing'
import Contact from '../components/sections/Contact'
import Faq from '../components/sections/Faq'

import { aboutSectionData } from '../data/sections'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection data={aboutSectionData} />
      <Features />
      <FeatureCards />
      <Features2 />
      <Services />
      <CallToAction />
      <Stats />
      <Testimonials />
      <Clients />
      <Faq />
      <Pricing />
      <Contact />
    </>
  )
}

export default Home 