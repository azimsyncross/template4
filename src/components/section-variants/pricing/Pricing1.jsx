import PropTypes from 'prop-types'

function Pricing1({ data, className = "" }) {
  return (
    <section id="pricing" className={`pricing-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Pricing Plans</span>
          <h2>Choose Your Perfect Plan</h2>
          <p>Select the best plan that fits your needs</p>
        </div>

        <div className="row g-4">
          {data.plans.map((plan, index) => (
            <div 
              key={index} 
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
                {plan.isPopular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                
                <div className="card-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/ month</span>
                  </div>
                  <p>{plan.description}</p>
                </div>

                <div className="features">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={plan.buttonLink} 
                  className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {plan.buttonText}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Pricing1.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Pricing1 