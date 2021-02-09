import React from "react";
import Hero from "../Components/Hero/hero";
import Jumbo from "../Components/Jumbotron/Jumbo";

const About  = () => {

    return (
        <div>
            <Hero backgroundImage="">
            </Hero>
            <Jumbo
            titleName="display-4"
            name="Meredith Jones"
            message=""
            text="Please refer to the buttons below to access my online resume and portfolio page"
            href1="/"
            href2="public/Assets/Resume/meredith_jones_resume .pdf"
            button1="See my projects"
            button2="Online Resume"
            messagecss="lead"
            >
            </Jumbo>
        </div>
    )
    }
    export default About