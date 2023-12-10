// components/Skills.jsx

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-node-js node-icon"></i>
                    <p>Node</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-python python-icon"></i>
                    <p>Python</p>
                </div>
                <div className="skill-card java">
                    <i className="fa-brands fa-java java-icon"></i>
                    <p>Java</p>
                </div>
                <div className="skill-card csharp">
                    <i className="fa-brands fa-cuttlefish csharp-icon"></i>
                    <p>C#</p>
                </div>
                <div className="skill-card sccm">
                    <i className="fa-solid fa-cogs sccm-icon"></i>
                    <p>SCCM</p>
                </div>
                <div className="skill-card installshield">
                    <i className="fa-solid fa-toolbox installshield-icon"></i>
                    <p>InstallShield</p>
                </div>
                <div className="skill-card adminstudio">
                    <i className="fa-solid fa-desktop adminstudio-icon"></i>
                    <p>AdminStudio</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;