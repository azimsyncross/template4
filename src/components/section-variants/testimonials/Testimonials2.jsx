import PropTypes from 'prop-types'

function Testimonials2({ data, className = "" }) {
  return (
    <section id="testimonials" className={`testimonials-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Testimonials</span>
          <h2>Client Success Stories</h2>
          <p>Real feedback from our valued clients</p>
        </div>

        <div className="testimonials-grid">
          {data.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-header">
                <div className="client-info">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className="company-logo">
                  <img src={testimonial.companyLogo} alt="Company" />
                </div>
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>

              <p className="quote">{testimonial.quote}</p>

              <div className="card-footer">
                <div className="project-info">
                  <span className="label">Project:</span>
                  <span className="value">{testimonial.project}</span>
                </div>
                <a href="#" className="case-study-link">
                  View Case Study
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#contact" className="btn btn-primary">
            Become Our Next Success Story
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  )
}

Testimonials2.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Testimonials2 