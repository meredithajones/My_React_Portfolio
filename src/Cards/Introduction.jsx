import React from "react";

const AboutMe = () => {
    return (
          <div className = "top">
          <Hero backgroundImage={background.jpg}>
            <h1 className="title">Hi,I'm Meredith Jones</h1>
            <h2>Front End Developer</h2>
          </Hero>
          </div>
          <Container style={{ marginTop: 20 }}>
            <section className = "bio">
              <Row><Col size="md-12" style={{mx: "auto"}}>
                <h1 style={{textAlign:"center"}}>About Me</h1>
                <hr className="col-11 mt-1 ml-0 pt-0 pb-2" />
              </Col> </Row>
            <Row>
              <Col size="lg-2"style={{margin: "10px", display:"flex", justifyContent:"center"}} className="picture">
              <img src={profilePic} className="profilePicture" />
              </Col>
              <Col size="lg-10" style={{margin: "10px"}}> 
                <p style="margin-right:20em;"><h5>
                    <br> My name is Meredith Jones. I am currently a student of Web Engineering in the Upenn Full Stack Developer Course. 
                  I am excited to apply all of my newly acquired skills after I complete the program.
                </br> 
                <br>
                  I have lived in Philadelphia for the last 15 years, but I grew up in Northern California just outside of San Francisco.
                  I received my undergraduate degree from Arcadia University in International Business and Culture. 
              </br>
              <br>
                  Prior to the pandemic, the majority of my work experience has been in the hospitality industry.
                  I facilitated opening and managed a craft beer shop in Narberth from 2012 until 2020.
            </br>
            <br>
            During my 8 years there, I was in charge of all of the online content for both the beer shop and the attached pub.
            I managed both their Facebook and Instagram accounts in addition to their web pages. 
          </br>
              </Col></Row>
            <Row>
              <Col size="md-12">    
                <p>
                  Currently I'm enrolled in University of Pennsylvania Coding Bootcamp. By the end of this program I will be walking away with a certification for Full Stack Web Development. In this camp I've learn how to use HTML, CSS, Javascript, jquery, express, node, MySQL, mongoDb, mongoose, react. This certification is going to give me  the next chapter of my life.
                </p>
              </Col>
            </Row>
            </section>
          </Container>
 
export default AboutMe;