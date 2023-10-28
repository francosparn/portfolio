function About(){
    return (
        <section id="about" className="pb-4 text-center">
            <div className="container">
                <div className="mb-3">
                    <i className="fa-solid fa-circle-info fa-2xl"></i>
                </div>
                <h2 className="fw-bold mb-5">Sobre mi</h2>
                <p>¡Hola! Soy Franco, un entusiasta de la tecnología y principalmente del desarrollo de software. En el año 2019 me gradué de la Carrera de <span>Analista de Sistemas de Computación</span> y desde entonces, me encuentro en constante formación.</p>
                <p>Mi experiencia se centra en el desarrollo back-end, con un enfoque especial en el ecosistema de <span>Python</span>. Me especializo en tecnologías como <span>Django</span> y <span>Django REST Framework</span>, las cuales me han permitido crear aplicaciones web y APIs robustas y escalables.</p>
                <p>Si mi perfil es de tu interés, ¡puedes <a href="mailto:francosparn@gmail.com" className="link">contactarme</a> para que podamos trabajar juntos en proyectos innovadores!</p>
            </div>
        </section>
    );
}

export default About;