function Contact(){
    return (
        <section id="contact" className="text-center py-5">
            <div className="text-center mb-3">
                <i className="fa-regular fa-envelope-open fa-2xl"></i>
            </div>
            <h2 className="fw-bold">Contacto</h2>
            <p>Puedas encontrarme en</p>
            <div className="social my-5">
                <a href="https://linkedin.com/in/francosparn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in fa-2xl"></i>
                </a>
                <a href="https://github.com/francosparn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a href="mailto:francosparn@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope fa-2xl"></i>
                </a>
            </div>
        </section>
    );
}

export default Contact;