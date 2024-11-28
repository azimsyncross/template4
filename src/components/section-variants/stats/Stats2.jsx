import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Stats2({ data, className = "" }) {
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
    <section id="stats" className={`stats-2 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <span className="badge">Company Stats</span>
          <h2>Our Achievements</h2>
          <p>Milestones that showcase our journey and success</p>
        </div>

        <div className="stats-wrapper">
          {data.map((stat, index) => (
            <div 
              key={stat.id}
              className="stat-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="progress-circle">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={`${(counters[index] / stat.number) * 100}, 100`}
                  />
                </svg>
                <div className="progress-content">
                  <i className={stat.icon}></i>
                </div>
              </div>
              
              <div className="stat-content">
                <div className="counter-wrapper">
                  <span className="counter">{counters[index]}</span>
                  <span className="suffix">+</span>
                </div>
                <p>{stat.label}</p>
                <span className="stat-description">{stat.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  )
}

Stats2.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Stats2 