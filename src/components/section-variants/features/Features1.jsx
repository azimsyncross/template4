import { useState } from 'react'
import PropTypes from 'prop-types'

function Features1({ data, className = "" }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id)

  return (
    <section id="features" className={`features-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Features</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="features-tabs">
              {data.tabs.map((tab) => (
                <div 
                  key={tab.id}
                  className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="icon">
                    <i className="bi bi-check-circle"></i>
                  </div>
                  <div className="content">
                    <h4>{tab.title}</h4>
                    <p>{tab.content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            {data.tabs.map((tab) => (
              <div 
                key={tab.id}
                className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
              >
                <img 
                  src={tab.content.image} 
                  alt={tab.title} 
                  className="img-fluid"
                />
                <div className="feature-list">
                  {tab.content.list.map((item, index) => (
                    <div key={index} className="feature-item">
                      <i className="bi bi-check-lg"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Features1.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Features1 