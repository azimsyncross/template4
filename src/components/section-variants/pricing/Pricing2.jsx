import { useState } from 'react'
import PropTypes from 'prop-types'

function Pricing2({ data, className = "" }) {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className={`pricing-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="content-wrapper">
              <span className="badge">Pricing</span>
              <h2>Simple, Transparent Pricing</h2>
              <p>Choose the perfect plan for your needs. Save up to 20% with annual billing.</p>
              
              <div className="billing-toggle">
                <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={isAnnual}
                    onChange={() => setIsAnnual(!isAnnual)}
                  />
                  <span className="slider"></span>
                </label>
                <span className={isAnnual ? 'active' : ''}>Annual</span>
              </div>

              <div className="pricing-features">
                <h4>All plans include:</h4>
                <div className="feature-list">
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>24/7 Support</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Free Updates</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>API Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="pricing-grid">
              {data.plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {plan.isPopular && (
                    <div className="popular-badge">
                      <i className="bi bi-star"></i>
                      Best Value
                    </div>
                  )}
                  
                  <div className="card-header">
                    <div className="plan-icon">
                      <i className={plan.icon}></i>
                    </div>
                    <h3>{plan.name}</h3>
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">
                        {isAnnual ? plan.annualPrice : plan.price}
                      </span>
                      <span className="period">/ {isAnnual ? 'year' : 'month'}</span>
                    </div>
                  </div>

                  <div className="features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <i className="bi bi-check-lg"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={plan.buttonLink} className="btn btn-primary w-100">
                    {plan.buttonText}
                  </a>

                  {plan.isPopular && (
                    <div className="save-badge">
                      Save 20%
                    </div>
                  )}
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

Pricing2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Pricing2 