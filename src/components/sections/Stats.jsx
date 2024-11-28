import { useState, useEffect } from 'react'
import { stats } from '../../data/stats'

function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 1000 // 1 second duration
    const steps = 50 // Number of steps for smooth counting

    stats.forEach((stat, index) => {
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
  }, [])

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div key={stat.id} className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span className="purecounter">
                  {counters[index]}
                </span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 