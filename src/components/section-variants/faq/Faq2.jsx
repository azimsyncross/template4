import PropTypes from 'prop-types'

function Faq2({ data, className = "" }) {
  return (
    <section id="faq" className={`faq-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">FAQ</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>

        <div className="row g-4">
          {data.questions.map((item) => (
            <div 
              key={item.id} 
              className="col-lg-6"
              data-aos="fade-up" 
              data-aos-delay={item.id * 100}
            >
              <div className="faq-card">
                <div className="card-icon">
                  <i className="bi bi-question-circle"></i>
                </div>
                <div className="card-content">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
                <div className="hover-content">
                  <a href="#" className="btn btn-sm btn-light">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="help-text">
            <p>Still have questions?</p>
            <a href="#contact" className="btn btn-primary">
              Contact Support
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

Faq2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Faq2 