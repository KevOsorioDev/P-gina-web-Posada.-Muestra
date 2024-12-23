import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import {useEffect} from 'react';

import ResponsiveHeader from './ResponsiveHeader';
import NavBarBottom from './NavBarBottom';
import {ArticleExploreSectionLeft, ArticleExploreSectionRight } from './ArticleExploreSection';

function AppExploraParaty () {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.stop();
  }, []);

  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 500);
  //   };

  //   // Ejecutar al montar para establecer el estado inicial
  //   handleResize();

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const { scrollYProgress } = useScroll()

  const scaleImg = useTransform(scrollYProgress, [0, .4], [1, 1.4]);
  const scaleText = useTransform(scrollYProgress, [0, .1], [1, 1.2]);

  // const rotation = isSmallScreen ? 90 : 0;

  const casaCulturalTexto = " Ubicada en el Centro Histórico de Paraty, cerca de la Plaza Matriz, la Casa da Cultura es el principal equipo cultural público de esta ciudad, declarada Patrimonio de la Humanidad por la UNESCO. Su misión es preservar y mejorar el patrimonio cultural de Paraty, así como fomentar la creación, producción y difusión de todas las manifestaciones artísticas en la ciudad. Desde 2013, ha experimentado una revitalización, ofreciendo un programa permanente de exposiciones, presentaciones y cursos de arte, música, cine y teatro durante todo el año."
  const flipTexto = "La Fiesta Literaria Internacional de Paraty (Flip) es un prestigioso festival literario que se celebra anualmente en la ciudad de Paraty, en el estado de Río de Janeiro, Brasil. Desde su creación en 2003, Flip ha reunido a escritores, lectores y amantes de la literatura de todo el mundo. Flip ofrece una variedad de actividades, incluyendo lecturas, discusiones, talleres literarios y eventos para niños y jóvenes. El evento es impulsado por la Asociación Casa Azul, una organización sin fines de lucro, y cuenta con el apoyo de diversos patrocinadores."
  const centroHistoricoTexto = "El Centro Histórico de Paraty es una joya colonial ubicada en Paraty, Río de Janeiro, Brasil. Con calles adoquinadas y casas coloniales bien conservadas, este área transporta a los visitantes a los siglos XVIII y XIX. Declarado Patrimonio de la Humanidad por la UNESCO, el Centro Histórico alberga iglesias, museos, tiendas de artesanías y una gran variedad de restaurantes y cafés. Es un lugar ideal para explorar a pie y disfrutar de la rica historia y cultura que ofrece."
  const cachoeiraDoToboga = "Las Cachoeiras do Tobogã e Tarzan son dos hermosas cascadas ubicadas en Paraty, Río de Janeiro, Brasil. La Cachoeira do Tobogã es famosa por su gran pedra lisa, que permite a los visitantes deslizarse por ella hasta llegar a una piscina natural. Muy cerca de la Tobogã, a solo unos pocos metros, se encuentra el Poço do Tarzan, una pequeña piscina natural ideal para un refrescante baño. Ambas cascadas se encuentran en el Parque Nacional da Serra da Bocaina, una de las mayores áreas protegidas de la Mata Atlántica."
  const paseoEnBarcoText = "Explorar la Bahía de Paraty en barco o kayak es una experiencia única que permite descubrir la belleza natural de esta región. La bahía está salpicada de numerosas islas y playas de aguas cristalinas, ideales para nadar, bucear y relajarse. Los paseos en barco ofrecen una manera cómoda de recorrer varias islas en un solo día, mientras que los tours en kayak permiten una conexión más cercana con la naturaleza, navegando entre manglares y remotas playas escondidas."
  const caminoOuroTexto = "El Caminho do Ouro, también conocido como Camino del Oro, es una histórica ruta colonial en Paraty, Río de Janeiro, Brasil. Esta senda fue utilizada en los siglos XVII y XVIII para transportar oro y piedras preciosas desde Minas Gerais hasta el puerto de Paraty. Hoy en día, es una popular ruta de senderismo que atraviesa la exuberante Mata Atlántica, permitiendo a los visitantes experimentar tanto la belleza natural como la historia de la región. Además del Caminho do Ouro, la Mata Atlántica de Paraty alberga numerosos senderos similares que ofrecen vistas panorámicas y una rica biodiversidad."
  const snorkelTexto = "Hacer snorkel en las islas cercanas a Paraty, como Ilha do Pelado e Ilha Comprida, es una experiencia imperdible para los amantes del mar.\nEstas islas, situadas en la hermosa Bahía de Paraty, ofrecen aguas cristalinas y una rica vida marina que incluye coloridos peces tropicales y formaciones de coral. Ilha do Pelado es conocida por sus tranquilas playas y aguas serenas, ideales para una relajante sesión de snorkel. Por otro lado, Ilha Comprida destaca por sus pozas naturales, perfectas para explorar la biodiversidad marina.";
  const praiaDoCachadaco = "La Praia do Cachadaço es una de las playas más impresionantes de Paraty, ubicada en el distrito de Trindade. Conocida por su belleza natural y aguas cristalinas, esta playa es ideal para quienes buscan tranquilidad y conexión con la naturaleza. Un sendero corto y pintoresco lleva a los visitantes a una piscina natural formada por rocas, donde se puede nadar y hacer snorkel. La playa está rodeada de exuberante vegetación de la Mata Atlántica, ofreciendo un entorno perfecto para el relax y la aventura.";
  const praiaIlhaDoPeleado = "La Praia Ilha do Pelado es una joya escondida en la Bahía de Paraty, Río de Janeiro, Brasil. Conocida por sus aguas cristalinas y arenas blancas, esta isla ofrece un entorno paradisíaco perfecto para nadar, tomar el sol y hacer snorkel. La tranquilidad de la playa y la belleza natural circundante la convierten en un destino ideal para quienes buscan relajarse y disfrutar de la naturaleza. Accesible únicamente por barco, la Praia Ilha do Pelado es un refugio alejado del bullicio, donde los visitantes pueden experimentar la serenidad de esta isla remota.";
  const sacoDoMamangua = "El Saco do Mamanguá es un fiordo tropical único en la costa de Paraty, Río de Janeiro, Brasil. Rodeado de montañas cubiertas de la exuberante Mata Atlántica, este fiordo ofrece un paisaje impresionante y una biodiversidad excepcional. Es un destino perfecto para actividades al aire libre como senderismo, kayak y paddleboarding. Además de su belleza natural, el Saco do Mamanguá alberga comunidades tradicionales caiçaras que conservan sus costumbres y modo de vida. Es accesible por barco, lo que añade un toque de aventura a la visita.";
  const praiaDoSono = "La Praia do Sono es una hermosa y tranquila playa en Paraty, Río de Janeiro, Brasil. Con su arena blanca y aguas cristalinas, es un destino perfecto para aquellos que buscan escapar del bullicio y disfrutar de la naturaleza. La playa es accesible a pie mediante un sendero a través de la Mata Atlántica, lo que añade un toque de aventura a la visita. Además, cuenta con algunas pequeñas posadas y restaurantes, ofreciendo a los visitantes la oportunidad de relajarse y disfrutar de la gastronomía local en un entorno paradisíaco.";
  const peroRestaurante = "El Peró Restaurante ofrece una experiencia gastronómica sorprendente en el corazón de Paraty, Río de Janeiro, Brasil. Este restaurante combina la cocina indígena con la cocina contemporánea brasileña, utilizando ingredientes frescos y locales de la región de Paraty. Su objetivo principal es proporcionar una experiencia que combine sabor, creatividad y tradición, evocando recuerdos afectivos1. El Peró Restaurante es conocido por sus platos exquisitos y su ambiente acogedor, y es una excelente opción para disfrutar de la cocina brasileña en un entorno encantador.";
  const bananaDaTerra = "El Banana da Terra es un destacado restaurante ubicado en el encantador Centro Histórico de Paraty, Río de Janeiro, Brasil. Reconocido por su excelencia culinaria, este restaurante ofrece una deliciosa fusión de sabores brasileños tradicionales con un toque contemporáneo. Utilizando ingredientes locales frescos, Banana da Terra es famoso por sus platos de mariscos, como el camarão casadinho y la moqueca de peixe, así como por su acogedor ambiente y servicio impecable. Es el lugar perfecto para disfrutar de una auténtica experiencia gastronómica en Paraty.";
  const lagoaAzul = "La Lagoa Azul es un destino impresionante en Paraty, Río de Janeiro, Brasil, accesible exclusivamente en barco. Conocida por sus aguas turquesas y cristalinas, esta laguna ofrece un entorno perfecto para nadar, hacer snorkel y relajarse. Rodeada de exuberante vegetación, Lagoa Azul es un refugio de tranquilidad y belleza natural que encanta a los visitantes con su biodiversidad marina y paisajes pintorescos.";
  const IlhaDosCocos = "La Ilha do Coco es una isla pintoresca situada en la Bahía de Paraty, Río de Janeiro, Brasil. Esta isla es famosa por sus aguas cristalinas y playas de arena blanca, proporcionando un entorno ideal para nadar, tomar el sol y disfrutar de la naturaleza. Ilha do Coco es accesible únicamente en barco, lo que le confiere un ambiente tranquilo y aislado. La isla también es conocida por su rica biodiversidad y la belleza de sus paisajes, ofreciendo una experiencia única y serena a quienes la visitan.";


  return (
    <>
      <ResponsiveHeader urlImg="/palm-tree-logo-orange.svg"></ResponsiveHeader>

      <section className='hero-section-explore'>

        <motion.div
          className='left-explore-img'
          style={
            {scale: scaleImg,
            //  rotate: rotation, 
            }
          }
        >
        </motion.div>

        <motion.div
          className='right-explore-img'
          style={
            {scale: scaleImg,
            //  rotate: rotation, 
            }
          }
        >

        </motion.div>

        <div 
          className='explore-paraty-title-container'
          // style={{bottom: bottomTextMove}}
        >
          <motion.h2 
            className='expore-paraty-title'
            // style={{scale: scaleText, bottom: bottomTextMove}}
            style={{scale: scaleText}}
          >
            ¡Explora y aventurate en Paraty!
          </motion.h2>  

          <motion.div 
            className='links-explore-container'
            style={{scale: scaleText}}

          >
            <a href="">
              Centro histórico
            </a>

            <p>
              /
            </p>

            <a href="">
              Actividades en la naturaleza
            </a>

            <p>
              /
            </p>

            <a href="">
              Nuestras playas
            </a>

            <p>
              /
            </p>

            <a href="">
              Experiencias gastronómicas
            </a>

            <p>
              /
            </p>

            <a href="">
              Destinos en barco
            </a>

            <p>
              /
            </p>

            <a href="">
              Ver servicios incluídos de la posada
            </a>

          </motion.div>

        </div>

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

      <section className='section-explore white-section-tiny'>
        <h3>
          Centro Histórico de Paraty
        </h3>

        <ArticleExploreSectionRight
          img="/casa-cultural.webp"
          alt=""
          title="Casa Cultural de Paraty"
          text={casaCulturalTexto}
          link="https://www.casadaculturaparaty.org/"
          direccion="R. Dona Geralda, 194 - Paraty - RJ, 23970-000"
        ></ArticleExploreSectionRight>

        <ArticleExploreSectionLeft
          img="/flip-paraty.webp"
          alt=""
          title="Fiesta Literaria Internacional de Paraty"
          text={flipTexto}
          link="https://www.flip.org.br/"
          direccion="Paraty, Rua do Comércio, 69 - Centro Histórico, Paraty - RJ, 23970-000, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/centro-historico-article.webp"
          alt=""
          title="Centro Histórico de Paraty"
          text={centroHistoricoTexto}
          link="https://www.tripadvisor.com.ar/Attraction_Review-g303503-d3706214-Reviews-Centro_Historico-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Centro Histórico, Paraty - RJ, Brasil"
        ></ArticleExploreSectionRight>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#243022"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,149.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </section>

      <section className='section-explore green-section'>
        <h3>
          Actividades en la naturaleza
        </h3>

        <ArticleExploreSectionLeft
          img="/poco-do-tarzan.webp"
          alt=""
          title="Cachoeiras do Tobogã e Tarzan"
          text={cachoeiraDoToboga}
          link="https://paraty.com.br/cachoeiras/poco-do-tarzan/"
          direccion="Parque Nacional da Serra da Bocaina, Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/paseos-barco.webp"
          alt=""
          title="Paseos en Barco o Kayak por la Bahía de Paraty"
          text={paseoEnBarcoText}
          link="https://www.tripadvisor.com.ar/Attractions-g303503-Activities-c61-t167-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Bahía de Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionRight>  

        <ArticleExploreSectionLeft
          img="/camino-ouro.webp"
          alt=""
          title="Caminho do Ouro"
          text={caminoOuroTexto}
          link="https://paraty.com.br/cachoeiras/poco-do-tarzan/"
          direccion="Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/snorkel.webp"
          alt=""
          title="Snorkel en Ilha do Pelado e Ilha Comprida"
          text={snorkelTexto}
          link="https://www.tripadvisor.com.ar/Attractions-g303503-Activities-c61-t194-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Bahía de Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionRight>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#F3F7F0"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,149.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </section>

      <section className='section-explore second-white white-section-tiny'>
        <h3>
          Nuestras playas
        </h3>

        <ArticleExploreSectionLeft
          img="/PraiaDoCachadaco.webp"
          alt=""
          title="Praia do Cachadaço"
          text={praiaDoCachadaco}
          link="https://paraty.com.br/cachoeiras/poco-do-tarzan/"
          direccion="Trindade, Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/praia-ilha-do-pelado.webp"
          alt=""
          title="Praia Ilha do Pelado"
          text={praiaIlhaDoPeleado}
          link="https://www.tripadvisor.com.ar/Attractions-g303503-Activities-c61-t52-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Bahía de Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionRight>

        <ArticleExploreSectionLeft
          img="/saco-do-mamangua.webp"
          alt=""
          title="Saco do Mamanguá"
          text={sacoDoMamangua}
          link="https://www.tripadvisor.com.ar/Attractions-g303503-Activities-c61-t52-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/praia-do-sono.webp"
          alt=""
          title="Praia Do Sono"
          text={praiaDoSono}
          link="https://www.tripadvisor.com.ar/Attractions-g303503-Activities-c61-t52-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Praia do Sono, Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionRight>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#243022"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,149.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </section>

      <section className='section-explore green-section'>
        <h3>
          Experiencias gastronómicas
        </h3>

        <ArticleExploreSectionLeft
          img="/pero-restaurante.webp"
          alt=""
          title="Peró Restaurante"
          text={peroRestaurante}
          link="https://www.tripadvisor.com.ar/Restaurant_Review-g303503-d15450454-Reviews-Pero_Restaurante-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Av. Roberto Silveira 801, Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/banana-terra.webp"
          alt=""
          title="Banana da Terra"
          text={bananaDaTerra}
          link="https://www.tripadvisor.com.ar/Attractions-g303503-Activities-c61-t167-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Rua Dr. Samuel Costa, 198 - Centro Histórico, Paraty, RJ, 23970-000, Brasil"
        ></ArticleExploreSectionRight>  

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#F3F7F0"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,149.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </section>

      <section className='section-explore second-white no-padding-bottom white-section-tiny'>
        <h3>
          Rutas en barco
        </h3>

        <ArticleExploreSectionLeft
          img="/lagoa-azul.webp"
          alt=""
          title="Lagoa Azul"
          text={lagoaAzul}
          link="https://www.tripadvisor.com.ar/LocationPhotoDirectLink-g303503-d15191440-i352428010-Lancha_Aventura-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Bahía de Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>

        <ArticleExploreSectionRight
          img="/PraiaDoCachadaco.webp"
          alt=""
          title="Praia do Cachadaço"
          text={praiaDoCachadaco}
          link="https://paraty.com.br/cachoeiras/poco-do-tarzan/"
          direccion="Trindade, Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionRight>

      <ArticleExploreSectionLeft
          img="/ilha-dos-cocos.webp"
          alt=""
          title="Ilha dos Cocos"
          text={IlhaDosCocos}
          link="https://www.tripadvisor.com.br/Attraction_Review-g303503-d4056723-Reviews-Praia_Ilha_dos_Cocos-Paraty_State_of_Rio_de_Janeiro.html"
          direccion="Bahía de Paraty, Río de Janeiro, Brasil"
        ></ArticleExploreSectionLeft>
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

export default AppExploraParaty;