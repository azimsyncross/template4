import PropTypes from 'prop-types'

function Features2Second({ data, className = "" }) {
  return (
    <section id="features-2" className={`features2-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="content-wrapper">
              <span className="badge">Why Choose Us</span>
              <h2>Smart Features for Your Business</h2>
              <p>We provide the tools you need to succeed in today's digital world.</p>
              
              <div className="stats-row">
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>99%</h3>
                  <p>Success Rate</p>
                </div>
              </div>

              <a href="#" className="btn btn-primary">
                Explore Features
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="features-wrapper">
              <div className="row g-4">
                {[...data.leftFeatures, ...data.rightFeatures].map((feature, index) => (
                  <div 
                    key={index} 
                    className="col-md-6"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="feature-card">
                      <div className="icon-wrapper">
                        <i className={feature.icon}></i>
                      </div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                      <a href="#" className="learn-more">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pattern-dots"></div>
              <div className="pattern-lines"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Features2Second.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Features2Second 