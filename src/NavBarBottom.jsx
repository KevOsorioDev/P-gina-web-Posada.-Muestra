import { motion } from 'framer-motion';
import { useState } from "react";

const NavBarBottom = () => {

  const [menuActivado, setMenuActivado] = useState(false); 

  function cambiarActivacionMenu() {
    return setMenuActivado(!menuActivado)
  }

  return (
    <>

      <div className='navBarBottom'>
        <div className="navBarBottom__box navBarBottom-left">
          <a href=""> Dónde ubicarnos </a>
          <a href="#servicios"> Servicios incluídos </a>
          <a href=""> Habitaciones disponíbles </a>
          <a href=""> Retiros empresariales </a>
          <a href=""> Quiénes somos? </a>
        </div>

        <div 
          onClick={() => cambiarActivacionMenu()} className="navBarBottom__box navBarBottom-right"
          > 
          <i className="fa-solid fa-bars"></i>
        </div>

      </div>
      <motion.div
        className="menu-desplegable"
        style={{ display: menuActivado ? 'block' : 'none' }}
        initial={{ opacity: 0, zIndex: 0}}
        animate={ menuActivado ? {opacity:  1, zIndex: 200} : {opacity: 0, zIndex: 0}}
        transition={{ duration: .5, ease: "easeInOut" }}
      >

        <div className='close-button' onClick={() => cambiarActivacionMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <motion.div 
          className='menu-desplegable__links'
          initial={{ opacity: 0, zIndex: 0}}
          animate={ menuActivado ? {opacity:  1, zIndex: 200} : {opacity: 0, zIndex: 0}}
          transition={{ duration: .5, ease: "easeInOut" }}
        >
          <a href="">
            Servicios de la posada
          </a>

          <a href="">
            Habitaciones disponibles
          </a>

          <a href="">
            Conoce mas sobre Paraty
          </a>

          <a href="">
            Contactanos directamente
          </a>

          <a href="">
            Nuestra página en Booking
          </a>

          <a href="">
            Donde ubicarnos
          </a>
        </motion.div>

        <div className='socials-menu'>

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
      </motion.div>
    </>
  )
}

export default NavBarBottom;