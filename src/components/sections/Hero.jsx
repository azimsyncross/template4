import { useEffect } from 'react'
import { initGLightbox } from '../../utils/initPlugins'
import { heroData } from '../../data/home'

function Hero() {
  useEffect(() => {
    initGLightbox()
  }, [])

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div className="company-badge mb-4">
                <i className={`bi ${heroData.companyBadge.icon} me-2`}></i>
                {heroData.companyBadge.text}
              </div>

              <h1 className="mb-4">
                {heroData.heading.line1} <br />
                {heroData.heading.line2} <br />
                <span className="accent-text">{heroData.heading.accent}</span>
              </h1>

              <p className="mb-4 mb-md-5">
                {heroData.description}
              </p>

              <div className="hero-buttons">
                <a href={heroData.buttons.primary.href} className="btn btn-primary me-0 me-sm-2 mx-1">
                  {heroData.buttons.primary.text}
                </a>
                <a href={heroData.buttons.video.href} className="btn btn-link mt-2 mt-sm-0 glightbox">
                  <i className="bi bi-play-circle me-1"></i>
                  {heroData.buttons.video.text}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img src={heroData.heroImage.main} alt="Hero Image" className="img-fluid" />

              <div className="customers-badge">
                <div className="customer-avatars">
                  {heroData.heroImage.customerAvatars.map((avatar, index) => (
                    <img 
                      key={index}
                      src={avatar.src} 
                      alt={avatar.alt} 
                      className="avatar" 
                    />
                  ))}
                  <span className="avatar more">12+</span>
                </div>
                <p className="mb-0 mt-2">{heroData.heroImage.customerText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
          {heroData.stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div className="stat-content">
                  <h4>{stat.title}</h4>
                  <p className="mb-0">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero 