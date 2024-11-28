import PropTypes from 'prop-types'
import { features2Data } from '../../data/sections'

function Features2({ className = "" }) {
  return (
    <section id="features-2" className={`features-2 section ${className}`}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          
          {/* Left Features */}
          <div className="col-lg-4">
            {features2Data.leftFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`feature-item text-end ${index !== features2Data.leftFeatures.length - 1 ? 'mb-5' : ''}`}
                data-aos="fade-right"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="phone-mockup text-center">
              <img 
                src={features2Data.phoneMockup.image} 
                alt={features2Data.phoneMockup.alt} 
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="col-lg-4">
            {features2Data.rightFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`feature-item ${index !== features2Data.rightFeatures.length - 1 ? 'mb-5' : ''}`}
                data-aos="fade-left"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

Features2.propTypes = {
  className: PropTypes.string
}

export default Features2 