import speakerImg from "../../images/speaker.jpg";
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
                    <br></br>
                    <p>Contact us at projectorium@projectorium.com for more information.</p>
                </div>

                <br></br>
                <br></br>
                <div>
                        <h2 style={{ color: "white", backgroundColor:"#067062",marginBottom:"10px"}}>Our Team</h2>
                        <div>
                        <ul className="team_list">
                            <li className="team_member">
                                <img src={speakerImg} alt="Project Manager" />
                                <h3>Narendar</h3>
                                <p>Project Manager</p>
                                
                            </li>
                            <li className="team_member">
                                <img src={speakerImg} alt="Lead Developer"/>
                                <h3>Skand Raj</h3>
                                <p>Lead Developer</p>
                            </li>
                            <li className="team_member">
                                <img src={speakerImg} alt="UI/UX Designer"/>
                                <h3>Sai Srivatsa</h3>
                                <p>UI/UX Designer</p>
                            </li>
                            <li className="team_member">
                                <img src={speakerImg} alt="QA Engineer"/>
                                <h3>Sumukhendra</h3>
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