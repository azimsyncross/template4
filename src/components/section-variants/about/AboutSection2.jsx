import PropTypes from 'prop-types'

function AboutSection2({ data, className = "" }) {
  return (
    <section id="about" className={`about-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        {/* Top Row - Images */}
        <div className="row image-row">
          <div className="col-lg-8 offset-lg-2" data-aos="zoom-in">
            <div className="image-grid">
              <img 
                src={data.images.main.src} 
                alt={data.images.main.alt} 
                className="main-image"
              />
              <img 
                src={data.images.small.src} 
                alt={data.images.small.alt} 
                className="side-image"
              />
              <div className="experience-card">
                <h3>{data.experience.years}</h3>
                <p>{data.experience.text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Content */}
        <div className="row content-row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="content-left">
              <span className="subtitle">{data.meta}</span>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              
              <div className="feature-columns">
                <div className="column">
                  {data.featureList.column1.map((item, index) => (
                    <div key={index} className="feature-item">
                      <i className="bi bi-shield-check"></i>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="column">
                  {data.featureList.column2.map((item, index) => (
                    <div key={index} className="feature-item">
                      <i className="bi bi-shield-check"></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="content-right">
              <div className="profile-card">
                <div className="profile-image">
                  <img src={data.profile.image} alt={data.profile.name} />
                </div>
                <div className="profile-info">
                  <h4>{data.profile.name}</h4>
                  <p>{data.profile.position}</p>
                </div>
              </div>

              <div className="contact-card">
                <i className={`bi ${data.contact.icon}`}></i>
                <div>
                  <span>{data.contact.label}</span>
                  <h4>{data.contact.number}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutSection2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default AboutSection2 