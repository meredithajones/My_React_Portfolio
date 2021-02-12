import React from "react";
import Hero from "../Components/Hero/hero";
import Jumbo from "../Components/Jumbotron/Jumbo";

const Contact  = () => {

    return (
        <div>
            <Hero backgroundImage="public/Assets/Images/background.jpg">
            <Jumbo
            titleName="text-center"
            name="Contact Me"
            message= "Reach Out! Email me at meredithjonesp@gmail.com Phone: 610-213-XXXX" 
            button1="Send Email"
            href1="mailto:meredithjonesp@gmail.com"
            hide="hide"
            centered="center"
            messagecss="lead text-center"
            >
            </Jumbo>
            </Hero>
        </div>
    )
    }
    export default Contact