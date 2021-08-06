import React from "react";
import { Link } from "react-router-dom";
import Paper from "../component/paper/PaperClass";
import Container from "../layout/Container";
import AboutContent from "../component/aboutContent/AboutContent";

const About = () => {
    return(
        <Paper>
            {/* tanpa styling di Container pun sama */}
            {/* <Container flexDirection="column" justifyContent="space-between" height="100%"> */}
            <Container>
                <AboutContent/>
            </Container>
        </Paper>
    );
}

export default About;