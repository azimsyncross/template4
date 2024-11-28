import PropTypes from 'prop-types'

function Contact1({ className = "" }) {
  return (
    <section id="contact" className={`contact-1 section ${className}`}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Need to get in touch? We're here to help</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 gx-lg-5">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="info-box">
              <div className="info-item" data-aos="fade-up">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, NY 535022, USA</p>
                  <p>New York, United States</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up">
                <div className="icon-box">
                  <i className="bi bi-phone"></i>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div className="form-group mt-3">
                <textarea 
                  className="form-control" 
                  rows="8" 
                  placeholder="Message" 
                  required
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary">
                  Send Message
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact1.propTypes = {
  className: PropTypes.string
}

export default Contact1 