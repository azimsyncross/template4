import PropTypes from 'prop-types'

function Services2({ data, className = "" }) {
  return (
    <section id="services" className={`services-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="content-wrapper">
              <span className="badge">Services</span>
              <h2>Solutions That Drive Success</h2>
              <p>We provide comprehensive solutions tailored to meet your business needs and goals.</p>
              
              <div className="stats-row">
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Projects Done</p>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary">
                Get Started
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="services-grid">
              {data.map((service, index) => (
                <div 
                  key={service.id}
                  className="service-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="card-header">
                    <div className="icon-box">
                      <i className={service.icon}></i>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  
                  <p>{service.description}</p>
                  
                  <div className="card-footer">
                    <div className="benefits">
                      <div className="benefit-item">
                        <i className="bi bi-check-circle"></i>
                        <span>Fast Delivery</span>
                      </div>
                      <div className="benefit-item">
                        <i className="bi bi-check-circle"></i>
                        <span>24/7 Support</span>
                      </div>
                    </div>
                    
                    <a href={service.link} className="learn-more">
                      Explore Service
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  )
}

Services2.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Services2 