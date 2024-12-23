const ResponsiveHeader = ({urlImg}) =>{
  return (
    <>
      <header className='headerFull'>
        
        <img src={urlImg} alt="" />


        <a className="pageTitle" href="../index.html">
          <h1>Pousada Brasil</h1>
        </a>

        <div className="languages">
          <span className="languages__selector">En</span>
          <span> | </span>
          <span className="languages__selector">Esp</span>
          <span> | </span>
          <span className="languages__selector">Port</span>
        </div>
      </header>
    </>
  )
}

export default ResponsiveHeader;