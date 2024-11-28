import PropTypes from 'prop-types'
import { ctaSectionData } from '../../data/sections'

function CallToAction({ className = "" }) {
  return (
    <section id="call-to-action" className={`call-to-action section ${className}`}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row content justify-content-center align-items-center position-relative">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 mb-4">{ctaSectionData.title}</h2>
            <p className="mb-4">{ctaSectionData.description}</p>
            <a href={ctaSectionData.button.url} className="btn btn-cta">
              {ctaSectionData.button.text}
            </a>
          </div>

          {/* Abstract Background Elements */}
          <div className="shape shape-1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d={ctaSectionData.shapes.shape1} transform="translate(100 100)"></path>
            </svg>
          </div>

          <div className="shape shape-2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d={ctaSectionData.shapes.shape2} transform="translate(100 100)"></path>
            </svg>
          </div>

          {/* Dot Pattern Groups */}
          <div className="dots dots-1">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
            </svg>
          </div>

          <div className="dots dots-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern-2)"></rect>
            </svg>
          </div>

          <div className="shape shape-3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d={ctaSectionData.shapes.shape3} transform="translate(100 100)"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToAction.propTypes = {
  className: PropTypes.string
}

export default CallToAction 