import PropTypes from 'prop-types'

function Contact2({ className = "" }) {
  return (
    <section id="contact" className={`contact-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row">
          {/* Left Column - Form */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="contact-form-wrapper">
              <div className="section-header">
                <span className="badge">Contact Us</span>
                <h2>Let's Start a Conversation</h2>
                <p>Fill out the form and our team will get back to you within 24 hours</p>
              </div>

              <form className="contact-form">
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="John Doe" 
                  />
                  <label htmlFor="name">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="name@example.com" 
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-floating mb-3">
                  <select className="form-select" id="subject">
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                  </select>
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea 
                    className="form-control" 
                    id="message" 
                    style={{ height: "120px" }}
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-info-wrapper">
              <div className="contact-card">
                <div className="card-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="card-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Weekend: Closed</p>
                </div>
              </div>

              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="method-content">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <a href="tel:+15551234567" className="btn btn-sm btn-outline">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-chat-dots"></i>
                  </div>
                  <div className="method-content">
                    <h4>Live Chat</h4>
                    <p>Chat with our support team</p>
                    <button className="btn btn-sm btn-outline">
                      Start Chat
                    </button>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>support@example.com</p>
                    <a href="mailto:support@example.com" className="btn btn-sm btn-outline">
                      Send Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact2.propTypes = {
  className: PropTypes.string
}

export default Contact2 