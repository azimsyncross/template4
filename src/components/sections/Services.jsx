import { services } from '../../data/services'

function Services() {
  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="read-more">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 