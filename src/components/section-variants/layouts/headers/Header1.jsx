import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header1() {
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
    <header className={`header-1 ${isScrolled ? 'scrolled' : ''}`}>
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
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/features">Features</NavLink></li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <a href="#contact" className="btn btn-outline">Log In</a>
            <a href="#contact" className="btn btn-primary">Sign Up</a>
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
    </header>
  )
}

export default Header1 