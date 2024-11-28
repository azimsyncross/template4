import Banner from '../components/Banner'
import Contact from '../components/sections/Contact'
import Faq from '../components/sections/Faq'
import CallToAction from '../components/sections/CallToAction'
import { siteConfig } from '../data/siteconfig'

function ContactPage() {
  const { pageBanners } = siteConfig
  
  return (
    <>
      <Banner 
        title={pageBanners.contact.title} 
      />
      <Contact />
      <Faq />
      <CallToAction />
    </>
  )
}

export default ContactPage 