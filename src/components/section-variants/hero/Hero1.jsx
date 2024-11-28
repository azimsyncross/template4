import { useEffect } from 'react'
import { initGLightbox } from '../../../utils/initPlugins'

function Hero1({ data, className = "" }) {
  useEffect(() => {
    initGLightbox()
  }, [])

  return (
    <section id="hero" className={`hero-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div className="company-badge">
                <i className={`bi ${data.companyBadge.icon}`}></i>
                {data.companyBadge.text}
              </div>

              <h1>
                {data.heading.line1} <br />
                {data.heading.line2} <br />
                <span className="gradient-text">{data.heading.accent}</span>
              </h1>

              <p>{data.description}</p>

              <div className="hero-buttons">
                <a href={data.buttons.primary.href} className="btn btn-primary">
                  {data.buttons.primary.text}
                </a>
                <a href={data.buttons.video.href} className="btn btn-play glightbox">
                  <i className="bi bi-play-circle"></i>
                  {data.buttons.video.text}
                </a>
              </div>

              <div className="trusted-by">
                <p>Trusted by leading companies:</p>
                <div className="company-logos">
                  {data.trustedCompanies.map((company, index) => (
                    <img 
                      key={index}
                      src={company.logo} 
                      alt={company.name} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img src={data.heroImage.main} alt="Hero" className="img-fluid" />
              
              <div className="floating-card card-users">
                <div className="avatars">
                  {data.heroImage.customerAvatars.map((avatar, index) => (
                    <img 
                      key={index}
                      src={avatar.src} 
                      alt={avatar.alt} 
                    />
                  ))}
                  <span className="count">+12</span>
                </div>
                <p>{data.heroImage.customerText}</p>
              </div>

              <div className="floating-card card-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <h4>Excellent</h4>
                <p>Based on 1200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
    </section>
  )
}

export default Hero1 