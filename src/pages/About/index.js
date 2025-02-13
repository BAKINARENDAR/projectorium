const About = () => {
    return (
        <>
            <section>
                <div>
                    <head><h1>About Us</h1>
                    <link href="App.css" rel="stylesheet" />
                    </head>
                    <p>Welcome to Projectorium: The ultimate destination for projects of all sorts.</p>
                    <p>Our team is composed of students who are passionate about what they do.</p>
                    <p>Contact us at projectorium@projectorium.com for more information.</p>
                </div>

                <div>
                    <div>
                        <h2>Our Team</h2>
                        <ul className="team_list">
                            <li className="team_member">
                                <h3>Narendar</h3>
                                <img src="C:\Users\SAi\Documents\Projectorium\Projectorium\src\images\speaker.jpg" alt= "Narendar"/>
                                <p>Project Manager</p>
                            </li>
                            <li className="team_member">
                                <h3>Skand Raj</h3>
                                <img src="C:\Users\SAi\Documents\Projectorium\Projectorium\src\images\speaker.jpg" alt="Skand"/>
                                <p>Lead Developer</p>
                            </li>
                            <li className="team_member">
                                <h3>Sai Srivatsa</h3>
                                <img src="C:\Users\SAi\Documents\Projectorium\Projectorium\src\images\speaker.jpg" alt="Sai"/>
                                <p>UI/UX Designer</p>
                            </li>
                            <li className="team_member">
                                <h3>Sumukhendra</h3>
                                <img src="C:\Users\SAi\Documents\Projectorium\Projectorium\src\images\speaker.jpg" alt="Sum"/>
                                <p>QA Engineer</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;