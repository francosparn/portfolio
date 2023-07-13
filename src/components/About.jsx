function About(){
    return (
        <section id="about" className="pb-4 text-center">
            <div className="container">
                <div className="mb-3">
                    <i className="fa-solid fa-circle-info fa-2xl"></i>
                </div>
                <h2 className="fw-bold mb-5">About me</h2>
                <p>My name is Franco, I am passionate about technology and mainly about software development. In 2019 I graduated from the <span>Systems Analyst</span> career and since then I have been in constant training. I'm a back-end developer specializing in <span>Django</span> and the <span>Django REST Framework</span>. I also like to build dynamic, visually pleasing, and lightweight applications in <span>JavaScript</span> and <span>React</span>. If my profile is of interest to you, you can <a href="mailto:francosparn@gmail.com" className="link">contact me</a> so that we can work together.</p>
            </div>
        </section>
    );
}

export default About;