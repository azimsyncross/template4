import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Stats1({ data, className = "" }) {
  const [counters, setCounters] = useState(data.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    
    data.forEach((stat, index) => {
      let current = 0
      const target = stat.number
      const increment = target / steps
      const interval = duration / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, interval)

      return () => clearInterval(timer)
    })
  }, [data])

  return (
    <section id="stats" className={`stats-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="stats-content">
              <span className="badge">Our Growth</span>
              <h2>Numbers That Speak For Themselves</h2>
              <p>We take pride in our achievements and the trust our clients place in us. These numbers reflect our commitment to excellence and continuous growth.</p>
              <a href="#about" className="btn btn-primary">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="stats-grid">
              {data.map((stat, index) => (
                <div 
                  key={stat.id} 
                  className="stat-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="icon-box">
                    <i className={stat.icon}></i>
                  </div>
                  <h3>
                    <span className="counter">{counters[index]}</span>
                    <span className="suffix">+</span>
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Stats1.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Stats1 