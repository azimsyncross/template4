import PropTypes from 'prop-types'

function CallToAction2({ data, className = "" }) {
  return (
    <section id="call-to-action" className={`cta-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="cta-image">
              <img src="/img/cta-image.webp" alt="CTA" className="img-fluid" />
              <div className="floating-card">
                <div className="icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <div className="content">
                  <h4>Ready to Launch?</h4>
                  <p>Join thousands of satisfied customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="cta-content">
              <span className="cta-badge">Take Action</span>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              
              <div className="features">
                <div className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Free 14-day trial</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>No credit card required</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>24/7 Support</span>
                </div>
              </div>

              <div className="cta-buttons">
                <a href={data.button.url} className="btn btn-primary">
                  {data.button.text}
                </a>
                <a href="#" className="btn btn-link">
                  <i className="bi bi-play-circle"></i>
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToAction2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default CallToAction2 