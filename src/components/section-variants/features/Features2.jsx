import { useState } from 'react'
import PropTypes from 'prop-types'

function Features2({ data, className = "" }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id)

  return (
    <section id="features" className={`features-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="section-header">
              <span className="badge">Features</span>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>

            <div className="features-nav">
              {data.tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <h4>{tab.title}</h4>
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            {data.tabs.map((tab) => (
              <div 
                key={tab.id}
                className={`feature-content ${activeTab === tab.id ? 'active' : ''}`}
              >
                <div className="content-wrapper">
                  <div className="image-wrapper">
                    <img 
                      src={tab.content.image} 
                      alt={tab.title} 
                      className="img-fluid"
                    />
                    <div className="floating-card">
                      <div className="card-icon">
                        <i className="bi bi-lightning-charge"></i>
                      </div>
                      <div className="card-content">
                        <h4>Quick Setup</h4>
                        <p>Get started in minutes</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-details">
                    <h3>{tab.content.heading}</h3>
                    <p>{tab.content.description}</p>
                    
                    <div className="feature-grid">
                      {tab.content.list.map((item, index) => (
                        <div key={index} className="feature-item">
                          <div className="check-icon">
                            <i className="bi bi-check2"></i>
                          </div>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                    <a href="#" className="btn btn-primary">
                      Learn More
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Features2.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Features2 