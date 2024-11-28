function Footer2() {
  return (
    <footer className="footer-2">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h4>Join Our Newsletter</h4>
              <p>Subscribe to get the latest updates and news</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <a href="/" className="footer-logo">
                  <img src="/img/logo-light.png" alt="Logo" />
                </a>
                <p className="company-desc">
                  Leading provider of innovative solutions for digital transformation and business growth.
                </p>
                <div className="social-links">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Company</h4>
                <ul className="footer-links">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/pricing">Pricing Plans</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/careers">Careers</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Support</h4>
                <ul className="footer-links">
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Contact Info</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <div>
                      <h5>Location:</h5>
                      <p>A108 Adam Street, NY 535022, USA</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-phone"></i>
                    <div>
                      <h5>Call Us:</h5>
                      <p>+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <div>
                      <h5>Email Us:</h5>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright">
                © {new Date().getFullYear()} <strong>Company</strong>. All Rights Reserved
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer2 