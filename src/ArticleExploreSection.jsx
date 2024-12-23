import { useState } from 'react';

export function ArticleExploreSectionLeft({img, alt, title, text, link, direccion}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <article className='article-explore'>

      <h4 className="title-tinyDisplay">
        {title}
      </h4>

      <img 
        src={img} 
        alt={alt} 
      />

      <div className="div-tinyDisplay">
        <p className="direccion">
          <b className="bold">
            Ubicación:
          </b>
          <i>
            {direccion}
          </i>
        </p>

        <p onClick={toggleVisibility} className='verMas-tinyDisplay'>
          {isVisible ? 'Ocultar texto' : 'Ver más'}
        </p>

        <p 
          className="text-tinyDisplay"
          style={{ display: isVisible ? 'block' : 'none' }}
        >
          {text}
        </p>

        <a href={link} style={{ display: isVisible ? 'block' : 'none' }}>Página de referencia</a>

      </div>

      <div className="div right-div">
        <h4>
          {title}
        </h4>

        <p className="text">
          {text}
        </p>

        <a href={link}>Página de referencia</a>

        <p className="direccion">
          <b className="bold">
            Ubicación:
          </b>
          <i>
            {direccion}
          </i>
        </p>
      </div>

      </article>
    </>
  )
}

export function ArticleExploreSectionRight({img, alt, title, text, link, direccion}) {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <article className='article-explore'>

        <div className="div">

          <h4>
            {title}
          </h4>

          <p className="text">
            {text}
          </p>

          <a href={link}>Visita su página oficial aquí</a>

          <p className="direccion">
            <b className="bold">
              Dirección:
            </b>
            <i>
              {direccion}
            </i>
          </p>
        </div>

        <h4 className="title-tinyDisplay">
          {title}
        </h4>

        <img 
          src={img} 
          alt={alt} 
        />

        <div className="div-tinyDisplay">
          <p className="direccion">
            <b className="bold">
              Ubicación:
            </b>
            <i>
              {direccion}
            </i>
          </p>

          <p onClick={toggleVisibility} className='verMas-tinyDisplay'>
            {isVisible ? 'Ocultar texto' : 'Ver más'}
          </p>

          <p 
            className="text-tinyDisplay"
            style={{ display: isVisible ? 'block' : 'none' }}
          >
            {text}
          </p>

          <a href={link} style={{ display: isVisible ? 'block' : 'none' }}>Página de referencia</a>

        </div>

      </article>
    </>
  )
}