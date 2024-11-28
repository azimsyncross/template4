import PropTypes from 'prop-types'

function CallToAction1({ data, className = "" }) {
  return (
    <section id="call-to-action" className={`cta-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="cta-content">
              <span className="cta-badge">Get Started</span>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="cta-buttons">
                <a href={data.button.url} className="btn btn-primary">
                  {data.button.text}
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="shape shape-1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d={data.shapes.shape1} transform="translate(100 100)"></path>
          </svg>
        </div>
        <div className="shape shape-2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d={data.shapes.shape2} transform="translate(100 100)"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

CallToAction1.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default CallToAction1 