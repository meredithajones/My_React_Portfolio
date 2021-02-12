import React from "react";
import Hero from "../Components/Hero/hero";
import Jumbo from "../Components/Jumbotron/Jumbo";


const About  = () => {
    return (
        <div>
            <Hero  backgroundImage="public/Assets/Images/background.jpg">
            
            <Jumbo
            titleName="display-4"
            name="About Me"
            text="I am currently a student of Web Engineering in the Upenn Full Stack Bootcamp. I am excited to apply all of my newly acquired skills after I complete the program.

            I have lived in Philadelphia for the last 15 years, but I grew up in Northern California just outside of San Francisco. I received my undergraduate degree from Arcadia University in International Business and Culture.
            
            Prior to the pandemic, the majority of my work experience has been in the hospitality industry. I facilitated opening and managed a craft beer shop in Narberth from 2012 until 2020.
            
            During my 8 years there, I was in charge of all of the online content for both the beer shop and the attached pub. I managed both their Facebook and Instagram accounts in addition to their web pages."
            >
            </Jumbo>
            </Hero>
        </div>
    )
    }
    export default About