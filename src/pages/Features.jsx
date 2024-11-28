import Banner from '../components/Banner'
import Features from '../components/sections/Features'
import FeatureCards from '../components/sections/FeatureCards'
import Features2 from '../components/sections/Features2'
import CallToAction from '../components/sections/CallToAction'
import Clients from '../components/sections/Clients'
import { siteConfig } from '../data/siteconfig'

function FeaturesPage() {
  const { pageBanners } = siteConfig
  
  return (
    <>
      <Banner 
        title={pageBanners.features.title} 
       
      />
      <Features />
      <FeatureCards />
      <Features2 />
      <CallToAction />
      <Clients />
    </>
  )
}

export default FeaturesPage 