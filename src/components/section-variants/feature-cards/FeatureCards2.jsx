import PropTypes from 'prop-types'

function FeatureCards2({ data, className = "" }) {
  return (
    <section id="features-cards" className={`feature-cards-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="content-wrapper">
              <span className="badge">Features</span>
              <h2>Everything you need to succeed</h2>
              <p>Powerful features to help you manage, grow, and optimize your business efficiently.</p>
              
              <div className="feature-stats">
                <div className="stat-item">
                  <h3>99%</h3>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>

              <a href="#" className="btn btn-primary">
                Get Started
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="features-grid">
              {data.cards.map((card, index) => (
                <div 
                  key={index}
                  className="feature-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className={`icon-box ${card.color}`}>
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                  <div className="hover-content">
                    <a href="#" className="btn btn-sm btn-light">
                      Explore Feature
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeatureCards2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default FeatureCards2 