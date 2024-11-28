import PropTypes from 'prop-types'

function FeatureCards1({ data, className = "" }) {
  return (
    <section id="features-cards" className={`feature-cards-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Features</span>
          <h2>Core Features</h2>
          <p>Explore our powerful features designed to help you succeed</p>
        </div>

        <div className="row g-4">
          {data.cards.map((card, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-6" 
              data-aos="zoom-in" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className={`feature-box ${card.color}`}>
                <div className="icon-wrapper">
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
                <a href="#" className="read-more">
                  Learn More
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

FeatureCards1.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default FeatureCards1 