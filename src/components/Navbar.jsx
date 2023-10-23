function Navbar(){

    const miCV = () => {
      window.open('Resume-FrancoSparn.pdf', '_blank');
    }

    return (
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand title" href="#home">
            <span>{'{'}</span>FS<span>{'}'}</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
              </li>
              <li className="nav-item">
                <button onClick={miCV} className="nav-link resume">
                  <i className="fa-solid fa-download"></i> Resumen
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
