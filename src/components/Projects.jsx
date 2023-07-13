import { projects } from './projectsData';

function Projects(){
    return (
        <section id="projects" className="projects container py-5">
            <div className="text-center mb-3">
                <i className="fa-solid fa-code fa-2xl"></i>
            </div>
            <div className="text-center">
                <h2 className="fw-bold">Projects</h2>
                <p>These are some of my developments</p>
                <div className="row mt-5">
                    {projects.map((project, id) =>
                        <div key={id} className="col-md-4" data-aos="zoom-in" data-aos-duration="3500">
                            <div className="card-project mb-3">
                                <img
                                    src={project.image} 
                                    className="rounded mx-auto d-block img-fluid" 
                                    alt={project.alt} 
                                />
                                <h5 className="fw-bold my-3">{project.name}</h5>
                                <p>{project.description}</p>
                                <button className="button">
                                    <a href={project.url} className="link" target="_blank" rel="noopener noreferrer">View Code</a>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <p className="mt-5">If you want to see more of my projects, 
                    <a href="https://github.com/francosparn" className="link" target="_blank" rel="noopener noreferrer"> enter here</a>
                </p>
            </div>
        </section>
        
    );
}

export default Projects;


