import Banner from '../components/Banner'
import Pricing from '../components/sections/Pricing'
import Faq from '../components/sections/Faq'
import CallToAction from '../components/sections/CallToAction'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import { siteConfig } from '../data/siteconfig'

function PricingPage() {
  const { pageBanners } = siteConfig
  
  return (
    <>
      <Banner 
        title={pageBanners.pricing.title} 
        
      />
      <Pricing />
      <Stats />
      <Testimonials />
      <Faq />
      <CallToAction />
    </>
  )
}

export default PricingPage 