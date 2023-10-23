import { projects } from './projectsData';

function Projects(){
    return (
        <section id="projects" className="projects container py-5">
            <div className="text-center mb-3">
                <i className="fa-solid fa-code fa-2xl"></i>
            </div>
            <div className="text-center">
                <h2 className="fw-bold">Projectos</h2>
                <p>Estos son algunos de mis proyectos más recientes</p>
                <div className="row mt-5">
                    {projects.map((project, id) =>
                        <div key={id} className="col-md-6" data-aos="zoom-in" data-aos-duration="3500">
                            <div className="card-project mb-3">
                                <img
                                    src={project.image} 
                                    className="rounded mx-auto d-block img-fluid" 
                                    alt={project.alt} 
                                />
                                <h5 className="fw-bold my-3">{project.name}</h5>
                                <p>{project.description}</p>
                                <button className="button">
                                    <a href={project.url} className="link" target="_blank" rel="noopener noreferrer">Ver Código</a>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <p className="mt-5">Si deseas ver más de mis proyectos, haz
                    <a href="https://github.com/francosparn" className="link" target="_blank" rel="noopener noreferrer"> click aquí</a>
                </p>
            </div>
        </section>
        
    );
}

export default Projects;


