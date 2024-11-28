import Banner from '../components/Banner'
import AboutSection from '../components/sections/AboutSection'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import Clients from '../components/sections/Clients'
import { siteConfig } from '../data/siteconfig'
import { aboutSectionData } from '../data/sections'

function About() {
  const { pageBanners } = siteConfig
  
  return (
    <>
      <Banner 
        title={pageBanners.about.title} 
      />
      <AboutSection 
        data={aboutSectionData} 
        className="light-background"
      />
      <Stats />
      <Testimonials />
      <Clients />
    </>
  )
}

export default About 