// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300}
                   alt="Mikaël's personal headshot"/>
            <div className="hero-text">
                <h1>Hey, I'm Mikaël 👋</h1>
                <p>
                    I'm a software developer based in Paris, France. I specialize in construction, website and
                    application design, I am also a systems and network engineer, particularly in integration and
                    distribution via SCCM.
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/mikael1014"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/mikael1014"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mikaël-nicole-5a18a720"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;