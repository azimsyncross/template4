import { NavLink } from 'react-router-dom'
import { siteConfig } from '../data/siteconfig'

function Header() {
  const { header } = siteConfig

  const renderNavItem = (item) => {
    if (item.children) {
      return (
        <li className="dropdown">
          <a href="#"><span>{item.name}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            {item.children.map((child, index) => (
              <li key={index} className={child.children ? 'dropdown' : ''}>
                {child.children ? (
                  <>
                    <a href="#"><span>{child.name}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      {child.children.map((subChild, subIndex) => (
                        <li key={subIndex}>
                          <a href={subChild.path}>{subChild.name}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={child.path}>{child.name}</a>
                )}
              </li>
            ))}
          </ul>
        </li>
      )
    }

    return (
      <li>
        <NavLink 
          to={item.path}
          className={({isActive}) => isActive ? 'active' : ''}
        >
          {item.name}
        </NavLink>
      </li>
    )
  }

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {header.logo.image ? (
            <img src={header.logo.image} alt={header.logo.text} />
          ) : (
            <h1 className="sitename">{header.logo.text}</h1>
          )}
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            {header.navigation.map((item) => (
              renderNavItem(item)
            ))}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <NavLink to={header.ctaButton.path} className="btn-getstarted">
          {header.ctaButton.text}
        </NavLink>
      </div>
    </header>
  )
}

export default Header 