import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import {useEffect, useState} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import ResponsiveHeader from './ResponsiveHeader';
import {Scrollbar, Navigation} from 'swiper/modules';
import NavBarBottom from './NavBarBottom';
import ContactUs from './FormContact';

import 'swiper/css';
import 'swiper/css/pagination';

function AppHabitacionUno() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.stop(); // Limpieza del efecto cuando el componente se desmonte
  }, []);

  const [leftValues, setLeftValues] = useState(['10vw', '-50vw']); // Valores iniciales
  const [rightValues, setRightValues] = useState(['12vw', '-50vw']); // Valores iniciales
  const [topValues, setTopValues] = useState(['40%', '40%']); // Valores iniciales
  const [scaleValues, setScaleValues] = useState(['1', '1']); // Valores iniciales

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
  
      if (width <= 500) {
        setTopValues(['60%', '80%'])
        setLeftValues(['14vw', '5vw']);
        setRightValues(['12vw', '5vw']);
      } else if (width <= 600) {
        setTopValues(['60.5%', '80%'])
        setLeftValues(['16vw', '5vw']);
        setRightValues(['16vw', '5vw']);
      } else if (width <= 768) {
        setTopValues(['68.5%', '80%'])
        setLeftValues(['15vw', '5vw']);
        setRightValues(['15vw', '5vw']);
      } else if (width <= 900) {
        setTopValues(['60.5%', '80%'])
        setLeftValues(['15vw', '5vw']);
        setRightValues(['15vw', '5vw']);
      } else if (width <= 950) {
        setLeftValues(['17vw', '5vw']);
        setRightValues(['17vw', '5vw']);
        setTopValues(['62.7%', '80%'])
        setScaleValues(['1', '1.3'])
      } else if (width <= 1024) {
        setLeftValues(['7.5vw', '-40vw']);
        setRightValues(['10.1vw', '-40vw']);
      } else {
        setLeftValues(['10vw', '-50vw']);
        setRightValues(['12vw', '-50vw']);
      }
    }
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll()
  const scaleImage = useTransform(scrollYProgress, [0, .4], [1, 1.5])

  const rightInfoMove = useTransform(scrollYProgress, [.03, .6], rightValues)
  const leftInfoMove = useTransform(scrollYProgress, [.03, .6], leftValues)
  const topInfoMove = useTransform(scrollYProgress, [.08, .3], topValues)
  const scaleText = useTransform(scrollYProgress, [.08, .3], scaleValues)

  return (
    <>
      <ResponsiveHeader urlImg="/palm-tree-logo-white.svg"></ResponsiveHeader>

      <section className='habitacion-hero-section'>
        <motion.img 
          src="/P-gina-web-Posada.-Muestra/assets/habitacion-uno.webp"
          alt=""
          initial={{scale: 1}}
          style={{scale: scaleImage}}
        />

        <motion.div 
          className='tamaño-capacidad-box'
          style={{top: topInfoMove, right: rightInfoMove, scale: scaleText }}
        >
          <div>
            <p className='tamaño-title'>
              Tamaño
            </p>

            <p className='tamaño-medida'>
              100m²
            </p>
          </div>

          <div>
            <p className='capacidad-title'>
              Capacidad
            </p>

            <p className='capacidad-personas'>
              Hasta 5 personas
            </p>
          </div>

        </motion.div>

        <div className='habitacion-title-box'>
          <p className='habitacion-title-name'> Habitación uno </p>
        </div>

        <motion.div 
          className='habitacion-especificaciones'
          style={{top: topInfoMove,left: leftInfoMove, scale: scaleText}}
        >
          <p className='cantidad-ambientes'>
            5 ambientes
          </p>
          <p className='especificacion-ambientes'>
            2 baños <br />
            1 cocina/comedor <br />
            2 dormitorios
          </p>
        </motion.div>

        <NavBarBottom></NavBarBottom>
      </section>

      <section className='habitacion-info'>

        <div className='otras-habitaciones'>
          <a href="">
            Habitación uno
          </a>
          <a href="">
            Habitación dos
          </a>
          <a href="">
            Habitación tres
          </a>
        </div>

        <Swiper
          modules={[Scrollbar, Navigation]}
          breakpoints={{
            1980: {
              slidesPerView: 'auto',
              spaceBetween: 0
            },
            501: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            100: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }}
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={0}
          grabCursor={true}
          navigation
          className="swiper-imagenes-habitacion"
        >
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/habitacion-uno-first.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/habitacion-uno-thin.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/habitacion-uno-second.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/habitacion-uno-third.webp" alt="" />
          </SwiperSlide>
        </Swiper>

        <div className='infoYContactoContainer'>

          <div className='contacto-container'>
            <p className='form-title'>
              Contáctate directamente con nosotros:
            </p>

            <ContactUs
              serviceId="service_mnyltad"
              templateId="template_2zg772v"
              publicKeyUser="1eDteNJZfuNcSgtp-"
            >
            </ContactUs>

            <p className='link-booking'>
              O chequea la disponibilidad en <a href="">Booking!</a>
            </p>
          </div>

          <div className='info-container'>
            <p className='info-habitacion'>
            Sumérgete en la comodidad y el lujo de esta espaciosa habitación de 5 ambientes. 
            Perfecta para familias o grupos, cuenta con 2 dormitorios elegantes, ideales para el descanso, 
            y 2 baños modernos, diseñados para ofrecerte privacidad y confort. Además, disfrutarás de una cocina 
            totalmente equipada, donde podrás preparar tus platos favoritos mientras compartes momentos inolvidables. 
            Una experiencia que combina funcionalidad y estilo en cada rincón.
            </p>

            <div className='info-div'>

              <div className='info-especificaciones'>

                <p className='especificaciones-title'>
                  Electrodomesticos
                </p>

                <div>

                  <p className='especificaciones-details'>
                    Aire acondicionado
                  </p>
                  <p className='especificaciones-details'>
                    Microondas
                  </p>
                  <p className='especificaciones-details'>
                    Lavarropas
                  </p>

                </div>

              </div>

              <div className='info-especificaciones'>

                <p className='especificaciones-title'>
                  Facilidades
                </p>

                <div>

                  <p className='especificaciones-details'>
                    Gas (cocina, estufa, horno)
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      <footer>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F3F7F0" fillOpacity="1" d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,133.3C560,107,640,85,720,74.7C800,64,880,64,960,80C1040,96,1120,128,1200,133.3C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>

        <div className='logo'>
          <p> Pousada </p>
          <p> Brasil ! </p>
        </div>
        <div className='localizacion-contacto'>
          <div>
            <p> Vírgenes 497, Isidro Casanova, Buenos Aires </p>
            <a href="" className='last'> Contactese con nosotros </a>
          </div>
          <div>
            <a href=""> Instagram </a>
            <a href="" className='last'> Booking </a>
          </div>
        </div>
        <div className='derechos'>
          <p> © Pousada Brasil! </p>
        </div>
      </footer>
    </>
  )
}

export default AppHabitacionUno;