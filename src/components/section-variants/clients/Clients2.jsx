import PropTypes from 'prop-types'

function Clients2({ data, className = "" }) {
  return (
    <section id="clients" className={`clients-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="clients-content">
              <span className="badge">Our Clients</span>
              <h2>Trusted by Industry Leaders</h2>
              <p>We work with some of the world's leading companies across diverse industries.</p>
              <div className="stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>98%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="clients-grid">
              {data.clients.map((client, index) => (
                <div 
                  key={index} 
                  className="client-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="client-logo">
                    <img src={client.image} alt={client.alt} />
                  </div>
                  <div className="client-overlay">
                    <a href="#" className="btn btn-sm btn-light">View Case Study</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Clients2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Clients2 