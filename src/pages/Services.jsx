import Banner from '../components/Banner'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import Features2 from '../components/sections/Features2'
import CallToAction from '../components/sections/CallToAction'
import Clients from '../components/sections/Clients'
import { siteConfig } from '../data/siteconfig'

function ServicesPage() {
  const { pageBanners } = siteConfig
  
  return (
    <>
      <Banner 
        title={pageBanners.services.title} 
      />
      <Services />
      <Features2 />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Clients />
    </>
  )
}

export default ServicesPage 