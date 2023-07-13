import { skills } from './skillsData';

function Skills(){
    return (
        <section className="skills container">
            <div className="text-center mb-3">
                <i className="fa-solid fa-gears fa-2xl"></i>
            </div>
            <h2 className="text-center fw-bold mb-5">Skills</h2>
            <div className="row">
                {skills.map((skill) =>
                    <div key={skill} className="col-md-4">
                    <div className="skills-card py-2 mb-2">
                        <h5 className="fw-bold">
                            <i className="fa-solid fa-angle-right"></i>{skill}
                        </h5>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
}

export default Skills;