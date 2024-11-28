import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

function Testimonials1({ data, className = "" }) {
  return (
    <section id="testimonials" className={`testimonials-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="content-wrapper">
              <span className="badge">Testimonials</span>
              <h2>What Our Clients Say</h2>
              <p>Discover why businesses trust us with their success. Read what our clients have to say about their experience working with us.</p>
              
              <div className="testimonial-stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>4.9/5</h3>
                  <p>Client Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="testimonials-slider"
            >
              {data.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="quote-icon">
                      <i className="bi bi-quote"></i>
                    </div>
                    <p className="quote">{testimonial.quote}</p>
                    <div className="client-info">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div>
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonials1.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Testimonials1 