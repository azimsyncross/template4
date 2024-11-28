import PropTypes from 'prop-types'

function AboutSection1({ data, className = "" }) {
  return (
    <section id="about" className={`about-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          {/* Left Column - Content */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="content">
              <span className="badge">{data.meta}</span>
              <h2 className="title">{data.title}</h2>
              <p className="description">{data.description}</p>
              
              <div className="stats-row">
                <div className="stat-item">
                  <h3>{data.experience.years}</h3>
                  <p>{data.experience.text}</p>
                </div>
                <div className="stat-item">
                  <div className="profile">
                    <img src={data.profile.image} alt={data.profile.name} />
                    <div>
                      <h4>{data.profile.name}</h4>
                      <p>{data.profile.position}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="features">
                {[...data.featureList.column1, ...data.featureList.column2].map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="image-stack">
              <img 
                src={data.images.main.src} 
                alt={data.images.main.alt} 
                className="main-image"
              />
              <img 
                src={data.images.small.src} 
                alt={data.images.small.alt} 
                className="overlay-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutSection1.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default AboutSection1 