import { useState } from 'react'
import PropTypes from 'prop-types'
import { featuresSectionData } from '../../data/sections'

function Features() {
  const [activeTab, setActiveTab] = useState('features-tab-1')

  return (
    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{featuresSectionData.title}</h2>
        <p>{featuresSectionData.description}</p>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            {featuresSectionData.tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`nav-link ${activeTab === tab.id ? 'active show' : ''}`}
                  role="button"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <h4>{tab.title}</h4>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {featuresSectionData.tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''}`}
              id={tab.id}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>{tab.content.heading}</h3>
                  {tab.content.description && (
                    <p className="fst-italic">
                      {tab.content.description}
                    </p>
                  )}
                  <ul>
                    {tab.content.list.map((item, index) => (
                      <li key={index}>
                        <i className="bi bi-check2-all"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={tab.content.image} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Features.propTypes = {
  className: PropTypes.string
}

export default Features 