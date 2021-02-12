import React from "react";
import Hero from "../Components/Hero/hero";
import Card from "../Components/Card/card";
import Wrapper from "../Components/Wrapper/wrapper";
import HappyTrails from "../Components/Card/Images/happyTrails.gif"
import FitTrack from "../Components/Card/Images/fitness_tracker.gif"
import NoteTkr  from "../Components/Card/Images/note_taker.gif"
import PassGen from "../Components/Card/Images/password_generator.gif"
import ShopChef from "../Components/Card/Images/s_c_1.gif"
import StaffDir from "../Components/Card/Images/staff_directory.gif"
import Cards from "../Pages/Work.jsx"
const Projects  = () => {

    return (
        <div>
            <Hero backgroundImage="public/Assets/Images/background.jpg">
                <h1>Meredith Jones</h1>
                <h2>Thanks for taking a look at my portfolio!</h2>
            </Hero>
            <Wrapper>
                <Card/>
                {/* <img src={HappyTrails} alt="GIF"/>
                <img src={FitTrack} alt="GIF"/>
                <img src={NoteTkr} alt="GIF"/>
                <img src={PassGen} alt="GIF"/>
                <img src={ShopChef} alt="GIF"/>
                <img src={StaffDir} alt="GIF"/> */}
                
            </Wrapper>
        </div>
    );
}

export default Projects;