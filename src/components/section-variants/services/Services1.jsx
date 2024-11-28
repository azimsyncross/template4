import PropTypes from 'prop-types'

function Services1({ data, className = "" }) {
  return (
    <section id="services" className={`services-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Our Services</span>
          <h2>What We Offer</h2>
          <p>Explore our comprehensive range of services designed to help your business grow</p>
        </div>

        <div className="row g-4">
          {data.map((service) => (
            <div 
              key={service.id} 
              className="col-lg-6" 
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className={service.icon}></i>
                </div>
                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="read-more">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Services1.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Services1 