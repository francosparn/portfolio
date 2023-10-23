import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home(){

    useEffect(() => {
        Aos.init();
    },[])

    return (
        <section id="home" className="home container my-5">
            <div className="row align-items-center">
                <div className="col-md-8" data-aos="fade-right" data-aos-duration="3500">
                    <h1 className="fw-bold">Hola! Soy <span>Franco Sparn</span></h1>
                    <h5 className="my-3">Desarrollador Back-end especializado en Django y Django REST Framework.</h5>
                    <button className="button">
                        <a className="link" href="https://linkedin.com/in/francosparn" target="_blank" rel="noopener noreferrer">Más Información</a>
                    </button>
                </div>
                <div className="col-md-4 my-5" data-aos="fade-left" data-aos-duration="3500">
                    <img className="img-fluid" src="assets/images/laptop.png" alt="Laptop" />
                </div>
            </div>
        </section>
    );
}

export default Home;