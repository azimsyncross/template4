import PropTypes from 'prop-types'

function Features2First({ data, className = "" }) {
  return (
    <section id="features-2" className={`features2-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Core Features</span>
          <h2>Everything You Need</h2>
          <p>Powerful features to help you grow your business</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="features-image">
              <img src="/img/phone-features.webp" alt="Features" className="img-fluid" />
              <div className="floating-card">
                <div className="card-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="card-content">
                  <h4>Enterprise Security</h4>
                  <p>Bank-grade security for your business</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="features-grid">
              {data.leftFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="icon-box">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
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

Features2First.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Features2First 