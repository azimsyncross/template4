import { siteConfig } from '../data/siteconfig'

function Footer() {
  const { footer } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">{footer.about.logo}</span>
            </a>
            <div className="footer-contact pt-3">
              <p>{footer.about.contact.address}</p>
              <p>{footer.about.contact.city}</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>{footer.about.contact.phone}</span>
              </p>
              <p>
                <strong>Email:</strong> <span>{footer.about.contact.email}</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              {footer.about.social.map((social, index) => (
                <a key={index} href={social.url}>
                  <i className={`bi bi-${social.name}`}></i>
                </a>
              ))}
            </div>
          </div>

          {footer.links.map((column, index) => (
            <div key={index} className="col-lg-2 col-md-3 footer-links">
              <h4>{column.title}</h4>
              <ul>
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          {footer.copyright.text}{' '}
          <strong className="px-1 sitename">{footer.copyright.company}</strong>{' '}
          <span>{footer.copyright.rights}</span>
        </p>
        <div className="credits">
          {footer.copyright.credits.text}{' '}
          <a href={footer.copyright.credits.link.url}>
            {footer.copyright.credits.link.name}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 