import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { clientsData } from '../../data/sections'

function Clients({ className = "" }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper
      
      // Initialize autoplay
      if (swiper.autoplay) {
        swiper.autoplay.start()
      }
    }
  }, [])

  return (
    <section id="clients" className={`clients section ${className}`}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          {...clientsData.swiperConfig}
          className="init-swiper"
        >
          {clientsData.clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img 
                src={client.image} 
                className="img-fluid" 
                alt={client.alt} 
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Clients 