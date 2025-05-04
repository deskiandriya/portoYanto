import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content" data-aos="fade-up">
                <h1 className="typing-text">Hi, I'm Yanto</h1>
                <h2 className="typing-text-delay">Frontend Developer</h2>
                <p className="fade-in-text">I build beautiful and responsive websites with modern technologies</p>
                <div className="social-icons" data-aos="fade-up" data-aos-delay="200">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home; 