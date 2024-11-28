function Footer1() {
  return (
    <footer className="footer-1">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="footer-about">
                <a href="/" className="logo">
                  <img src="/img/logo.png" alt="Logo" />
                </a>
                <p>Empowering businesses with innovative solutions. We help companies transform their digital presence and achieve sustainable growth.</p>
                <div className="social-links">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-6">
              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/pricing">Pricing</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-6">
              <div className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <i className="bi bi-geo-alt"></i>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States
                </p>
                <p>
                  <i className="bi bi-phone"></i>
                  <a href="tel:+1234567890">+1 234 567 890</a>
                </p>
                <p>
                  <i className="bi bi-envelope"></i>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            © {new Date().getFullYear()} <strong>Company</strong>. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer1 