import PropTypes from 'prop-types'
import { featureCardsData } from '../../data/sections'

function FeatureCards({ className = "" }) {
  return (
    <section id="features-cards" className={`features-cards section ${className}`}>
      <div className="container">
        <div className="row gy-4">
          {featureCardsData.cards.map((card, index) => (
            <div 
              key={index} 
              className="col-xl-3 col-md-6" 
              data-aos="zoom-in" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className={`feature-box ${card.color}`}>
                <i className={`bi ${card.icon}`}></i>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

FeatureCards.propTypes = {
  className: PropTypes.string
}

export default FeatureCards 