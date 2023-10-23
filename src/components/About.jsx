function About(){
    return (
        <section id="about" className="pb-4 text-center">
            <div className="container">
                <div className="mb-3">
                    <i className="fa-solid fa-circle-info fa-2xl"></i>
                </div>
                <h2 className="fw-bold mb-5">Sobre mi</h2>
                <p>Mi nombre es Franco, soy un entusiasta de la tecnología y principalmente del desarrollo de software. En el año 2019 me gradué de la carrera de <span>Analista de Sistemas</span> y desde entonces me he mantenido en constante capacitación. Soy un desarrollador back-end especializado en <span>Django</span> y <span>Django REST Framework</span>. También me gusta crear aplicaciones dinámicas, visualmente agradables y livianas en <span>JavaScript</span> y <span>React</span>. Si mi perfil es de tu interés, puedes <a href="mailto:francosparn@gmail.com" className="link">contactarme</a> para que podamos trabajar juntos.</p>
            </div>
        </section>
    );
}

export default About;