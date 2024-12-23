import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lenis from '@studio-freight/lenis'
import {useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import Card from './Card';
import Button from './ButtonCard-two'
import ResponsiveHeader from './ResponsiveHeader';
import NavBarBottom from './NavBarBottom';
// import CalendarioDisponibilidad from './calendario-disponibilidad';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';

registerLocale("es", es); // Registra el idioma

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.stop(); // Limpieza del efecto cuando el componente se desmonte
  }, []);

  const { scrollYProgress } = useScroll()

  const [maxScale, setMaxScale] = useState(1.4);

  // Verificar el ancho de la ventana y ajustar maxScale dinámicamente
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setMaxScale(2.5);
      }
      // else if (window.innerWidth <= 800) {
      //   setMaxScale(.2);
      // }
      else {
        setMaxScale(3.1);
      }
    };

    // Ejecutar al cargar la página y en cada cambio de tamaño
    handleResize();
    window.addEventListener('resize', handleResize);

    
  return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scaleVideo = useTransform(scrollYProgress, [0, .9], [1, maxScale]);
  const scaleH2Info = useTransform(scrollYProgress, [0, 1], [.8, 2])
  const scaleH2Rooms = useTransform(scrollYProgress, [0, .5], [1, 1.4])
  const scaleH2Paquetes = useTransform(scrollYProgress, [0, 1], [.4, 2])

  const [fechas, setFechas] = useState([null, null]);
  const [habitacionesFiltradas, setHabitacionesFiltradas] = useState([]);

  const habitaciones = [
    { 
      id: 1, 
      nombre: "Suite Familiar", 
      imagen: "suite.jpg", 
      reservas: [
        { inicio: new Date("2024-11-10"), fin: new Date("2024-11-15") }
      ]
    },
    { 
      id: 2, 
      nombre: "Habitación Doble", 
      imagen: "doble.jpg", 
      reservas: []
    },
  ];

  const estaDisponible = (reservas, inicio, fin) => {
    return !reservas.some((reserva) => {
      return (
        (inicio <= reserva.fin && inicio >= reserva.inicio) || 
        (fin >= reserva.inicio && fin <= reserva.fin)
      );
    });
  };

  const buscarHabitaciones = () => {
    if (fechas[0] && fechas[1]) {
      const disponibles = habitaciones.filter((habitacion) =>
        estaDisponible(habitacion.reservas, fechas[0], fechas[1])
      );
      setHabitacionesFiltradas(disponibles);
    } else {
      alert("Por favor selecciona una fecha de inicio y una de fin.");
    }
  };

  const [mascotasDrop, setMascotasDrop] = useState(false)

  function switchDropTrue(setStateToChange) {
    return setStateToChange(true)
  }

  function switchDropFalse(setStateToChange) {
    return setStateToChange(false)
  }

  const [menuCalendarioDrop, setMenuCalendarioDrop] = useState(false)

  return (
    <>

      <section className={menuCalendarioDrop ? 'callendar-tiny' : 'callendar-tiny callendar-none'}>
        <div className='close-button' onClick={() => {setMenuCalendarioDrop(!menuCalendarioDrop)}}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <p className='text-disponibilidad-big'>Elige tus fechas</p>
        <DatePicker
          selectsRange
          startDate={fechas[0]}
          endDate={fechas[1]}
          onChange={(rango) => setFechas(rango)}
          locale="es" // Aplica el idioma
          inline
        />
        <button className='callendar__button' onClick={buscarHabitaciones}>Ver Habitaciones y precios</button>
      </section>

      <section className={menuCalendarioDrop ? 'callendar-background-display' : 'callendar-background-none'}></section>

      <ResponsiveHeader urlImg="/palm-tree-logo.svg" calendarioActivadoONo={menuCalendarioDrop}/>

      <section className='carrousel-hero-section'>
        <Swiper
          className='swiper-hero-section'
        >

          <SwiperSlide className='swiperSlide-hero-section first-slide'>
            <div className='video'>
              <motion.video
                autoPlay loop src="/P-gina-web-Posada.-Muestra/assets/paraty-hero-video.mp4"
                // initial={{scale: 1}}
                style={{scale: scaleVideo}}
              ></motion.video>
            </div>
            <div className='video-text'>
              <h2>
                Donde la naturaleza, la tradición y la alegría se reúnen en un solo lugar.
              </h2>
              <a href='/P-gina-web-Posada.-Muestra/explora-paraty.html' className='button-first-slide'>
                Explora Paraty
              </a>
            </div>

            

            <section className='callendar callendar-tinyDisplay'>
              <p className='text-disponibilidad-big'>Elige tus fechas</p>
              <DatePicker
                selectsRange
                startDate={fechas[0]}
                endDate={fechas[1]}
                onChange={(rango) => setFechas(rango)}
                locale="es"
                inline
              />
              <button className='callendar__button' onClick={buscarHabitaciones}>Ver Habitaciones y precios</button>
            </section>

            <section className='callendar-buttonForDisplay'>
              <p onClick={() => {setMenuCalendarioDrop(!menuCalendarioDrop)}}>
                Cliquea aqui para ver la disponibilidad de las habitaciones
              </p>
            </section>
          </SwiperSlide>

        </Swiper>

        <NavBarBottom></NavBarBottom>

        <div className='socials'>

          <a href="">
            <i 
              className="fa-brands fa-instagram"
            ></i>
          </a>

          <a href="">
            <i 
              className="fa-brands fa-facebook"
            ></i>
          </a>

        </div>
        
      </section>

      <section className='habitaciones-filtradas-container'>
        {fechas[0] && fechas[1] ? (
          habitacionesFiltradas.length > 0 ? (
            habitacionesFiltradas.map((habitacion) => (
              <article key={habitacion.id}>
                <h2>{habitacion.nombre}</h2>
                <img src={habitacion.imagen} alt={habitacion.nombre} />
              </article>
            ))
          ) : (
            <p>No hay habitaciones disponibles para las fechas seleccionadas.</p>
          )
        ) : (
          <p>No hay fechas seleccionadas aún.</p>
        )}
      </section>

      <section className="rooms">

        <p className='explore-paragraph'>Conoce más</p>

        <div className='section-titles-container'>

          <motion.h2 
            className='section-titles'
            style={{ scale: scaleH2Rooms}}
          > 
            Habitaciones & Suites
          </motion.h2>

        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
          slidesPerView={1}
          spaceBetween={300}
          grabCursor={true}
          navigation
          effect="fade"
          fadeEffect={{ crossFade: true }} 
          className='swiper-rooms'
        >

          <SwiperSlide className='swiperSlide-rooms slideOne'>

            <div className='informative-text-cards'>
              <h3>Suite N°1</h3>
              <p>Vistas al mar y relax.</p>
              <Button link={"/P-gina-web-Posada.-Muestra/habitacion-uno.html"} texto={"Quiero saber más!"}></Button>
            </div>

            <div className='card-container'>
              <Card imgSrc="/P-gina-web-Posada.-Muestra/assets/habitacion-uno.webp">
              </Card>
            </div>


          </SwiperSlide>
          <SwiperSlide className='swiperSlide-rooms'>
            
          </SwiperSlide>
          <SwiperSlide className='swiperSlide-rooms'>
            
          </SwiperSlide>
          <SwiperSlide className='swiperSlide-rooms'>
            
          </SwiperSlide>
        </Swiper>

      </section>

      <section className='allOptions'>
        <Swiper
          breakpoints={{
            801: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            100: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/retiro-empresarial-tiny.webp" alt="" />

            <p href="">
              Retiros empresariales
            </p>

            <button>
              Ver más
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/comida.webp" alt="" />

            <p href="">
              Comidas y desayunos
            </p>

            <button>
              Ver más
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/playa-tiny.webp" alt="" />

            <p href="">
              Playas de Paraty
            </p>

            <button>
              Ver más
            </button>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/P-gina-web-Posada.-Muestra/assets/barco-tiny.webp" alt="" />

            <p href="">
              Rutas en barco
            </p>

            <button>
              Ver más
            </button>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className='paraty-section'>

        <div className='info-container'>

          <div className='second-h2-container'>
            <motion.h2 
              className='secondH2'
              style={{scale: scaleH2Info}}>
              Ciudad colonial
            </motion.h2>
          </div>

          <div className='info-img-container'>
            <img 
            className='paraty-info-img' 
            src="/P-gina-web-Posada.-Muestra/assets/paraty-info.png" alt=""/>
          </div>

          <div className='info-container__button'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum architecto, eveniet nisi labore esse fugit repudiandae non, necessitatibus deleniti magni accusantium nihil. Aut consectetur, dolorum aperiam delectus quibusdam impedit ut?
            </p>
            
            <button className='paraty-info-button'> Aventurate en Paraty con nosotros </button>
          </div>

        </div>
        
      </section>

      <section className='servicios' id='servicios'>
        <motion.h2 
          className='servicios-title'
          initial={{scale: 1}}
          style={{scale: scaleH2Paquetes}}
        >
          Gastronomía Artesanal y Retiros Corporativos
        </motion.h2>
        
        <div>
          <article className='paquetes-box paquetes-izq'>
            <img src="/P-gina-web-Posada.-Muestra/assets/gastronomia.webp" alt="" />
            <span>Comidas caseras</span>
            <button>Ver más</button>
          </article>

          <article className='paquetes-box paquetes-der'>
            <img src="/P-gina-web-Posada.-Muestra/assets/retiro-empresarial-big.webp" alt="" />
            <span>Retiros empresariales</span>
            <button>Ver más</button>
          </article>
        </div>
      </section>

      <section className='tener-en-cuenta'>
        <div className='tener-en-cuenta-container'>
          <p onClick={() => {switchDropTrue(setMascotasDrop)}}>
            <i className="fa-solid fa-arrow-turn-down"></i>
            Puedo llevar mascotas a la posada?
          </p>
          <p className={mascotasDrop ? "tener-en-cuenta-drop" : "tener-en-cuenta-drop-invisible"}>
            <i className="fa-solid fa-circle-xmark" onClick={() => {switchDropFalse(setMascotasDrop)}}></i>
              No. Las mascotas no son permitidas en la posada.
          </p>
          <p>
            <i className="fa-solid fa-arrow-turn-down"></i>
            Check-in y check-out
          </p>
          <p>
            <i className="fa-solid fa-arrow-turn-down"></i>
            Cancelaciones y reembolsos
          </p>
          <p>
            <i className="fa-solid fa-arrow-turn-down"></i>
            Que edades no pagan estadía?
          </p>
          <p>
            <i className="fa-solid fa-arrow-turn-down"></i>
            Uso de áreas comunes
          </p>
          <p>
            <i className="fa-solid fa-arrow-turn-down"></i>
            Políticas de limpieza
          </p>
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
  );
}

export default App;
