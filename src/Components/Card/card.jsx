import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import FitTrack  from "./Images/fitness_tracker.gif";
import HappyTImg from "./Images/happyTrails.gif";
import NoteTake from "./Images/note_taker.gif";
const Cards  = () => {
return(
<CardGroup>
  <Card>
  
<a href="https://google.com">  <Card.Img variant="top" src={FitTrack} /> </a>  
    <Card.Body>
      <Card.Title>Fitness Tracker</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={HappyTImg} />
    <Card.Body>
      <Card.Title>Happy Trails</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={NoteTake} />
    <Card.Body>
      <Card.Title>Note Taker</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
)
};

export default Cards;
