// components/Footer.jsx

const Footer = () => {
    return (
        <>
            <hr/>
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Mikaël's Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )
}

export default Footer;