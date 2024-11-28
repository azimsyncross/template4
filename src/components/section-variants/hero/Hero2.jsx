import { useEffect } from 'react'
import { initGLightbox } from '../../../utils/initPlugins'

function Hero2({ data, className = "" }) {
  useEffect(() => {
    initGLightbox()
  }, [])

  return (
    <section id="hero" className={`hero-2 section ${className}`}>
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="hero-badge">
            <i className="bi bi-stars"></i>
            New Features Available
            <a href="#">Learn More <i className="bi bi-arrow-right"></i></a>
          </span>

          <h1 className="hero-title">
            {data.heading.line1} <br />
            {data.heading.line2} <br />
            <span className="highlight">{data.heading.accent}</span>
          </h1>

          <p className="hero-description">{data.description}</p>

          <div className="hero-actions">
            <a href={data.buttons.primary.href} className="btn btn-primary btn-lg">
              {data.buttons.primary.text}
              <i className="bi bi-arrow-right"></i>
            </a>
            <a href={data.buttons.video.href} className="btn btn-video glightbox">
              <span className="play-icon">
                <i className="bi bi-play-fill"></i>
              </span>
              <span className="play-text">
                {data.buttons.video.text}
                <small>See it in action (2 min)</small>
              </span>
            </a>
          </div>

          <div className="hero-image" data-aos="zoom-in" data-aos-delay="200">
            <img src={data.heroImage.main} alt="Hero" className="img-fluid" />
            
            <div className="stats-cards">
              {data.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="content">
                    <h4>{stat.title}</h4>
                    <p>{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="brands-wrapper">
            <p>Trusted by teams at</p>
            <div className="brands">
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

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </section>
  )
}

export default Hero2 