import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./jumbot.css"


const jumbot = (props) => (
    <Jumbotron className="text-center jumbo">
        <Container>
            <Row>

                {/* <!--  --> */}
                <div className="col-md-5 mx-auto d-flex align-items-center justify-content-center">
                    <div className="flex-column">
                        <h1 className="headline">{props.headline}</h1>
                        <p className="lead lead-bio text-muted">{props.leadText}</p>
                    </div>
                </div>
                {/* <!-- Photo --> */}
                <div className="col-md-5 mx-auto d-flex align-items-center justify-content-center">
                    <img className="jumbotronPhoto" src="./assets/images/mj_lake.jpg"
                        alt="A photograph of Meredith standing in front of a lake" />
                </div>
            </Row>
        </Container>
    </Jumbotron>
);

export default jumbot;