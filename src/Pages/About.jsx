import React from "react";
import Hero from "../Components/Hero/hero";
import Jumbo from "../Components/Jumbotron/Jumbo";

const About  = () => {
    return (
        <div>
            <Hero backgroundImage="public/Assets/Images/background.jpg">
            </Hero>
            <Jumbo
            titleName="display-4"
            name="Meredith Jones"
            message=""
            >
            </Jumbo>
        </div>
    )
    }
    export default About