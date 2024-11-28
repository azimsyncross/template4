import PropTypes from 'prop-types'

function AboutSection({ data, className = "" }) {
  return (
    <section id="about" className={`about section ${className}`}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta">{data.meta}</span>
            <h2 className="about-title">{data.title}</h2>
            <p className="about-description">{data.description}</p>

            <div className="row feature-list-wrapper">
              <div className="col-md-6">
                <ul className="feature-list">
                  {data.featureList.column1.map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  {data.featureList.column2.map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info-wrapper">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="profile d-flex align-items-center gap-3">
                    <img src={data.profile.image} alt="CEO Profile" className="profile-image" />
                    <div>
                      <h4 className="profile-name">{data.profile.name}</h4>
                      <p className="profile-position">{data.profile.position}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-info d-flex align-items-center gap-2">
                    <i className={`bi ${data.contact.icon}`}></i>
                    <div>
                      <p className="contact-label">{data.contact.label}</p>
                      <p className="contact-number">{data.contact.number}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                <img src={data.images.main.src} alt={data.images.main.alt} className="img-fluid main-image rounded-4" />
                <img src={data.images.small.src} alt={data.images.small.alt} className="img-fluid small-image rounded-4" />
              </div>
              <div className="experience-badge floating">
                <h3>{data.experience.years} <span>Years</span></h3>
                <p>{data.experience.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutSection.propTypes = {
  data: PropTypes.shape({
    meta: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featureList: PropTypes.shape({
      column1: PropTypes.arrayOf(PropTypes.string).isRequired,
      column2: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    profile: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    }).isRequired,
    contact: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired,
    images: PropTypes.shape({
      main: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      }).isRequired,
      small: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    experience: PropTypes.shape({
      years: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  className: PropTypes.string
}

export default AboutSection 