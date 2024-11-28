import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header2() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header-2 ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+1234567890">
                <i className="bi bi-telephone"></i>
                +1 (234) 567-890
              </a>
              <a href="mailto:info@example.com">
                <i className="bi bi-envelope"></i>
                info@example.com
              </a>
            </div>
            <div className="social-links">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src="/img/logo.png" alt="Logo" className="logo-dark" />
              <img src="/img/logo-light.png" alt="Logo" className="logo-light" />
            </Link>

            {/* Navigation */}
            <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li className="dropdown">
                  <NavLink to="/">Home</NavLink>
                  <ul className="dropdown-menu">
                    <li><Link to="/">Home 1</Link></li>
                    <li><Link to="/home-2">Home 2</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <NavLink to="/about">About</NavLink>
                  <ul className="dropdown-menu">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                  </ul>
                </li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>

            {/* Search and Actions */}
            <div className="header-actions">
              <button className="search-toggle">
                <i className="bi bi-search"></i>
              </button>
              <a href="#contact" className="btn btn-primary">
                Get Started
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className="search-overlay">
        <div className="container">
          <form className="search-form">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header2 