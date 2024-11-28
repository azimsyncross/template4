import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import PropTypes from 'prop-types'

function Clients1({ data, className = "" }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper
      if (swiper.autoplay) {
        swiper.autoplay.start()
      }
    }
  }, [])

  return (
    <section id="clients" className={`clients-1 section ${className}`}>
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Our Trusted Clients</h2>
          <p>Companies that trust and work with us</p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="clients-slider"
        >
          {data.clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="client-item">
                <img src={client.image} alt={client.alt} className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

Clients1.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Clients1 