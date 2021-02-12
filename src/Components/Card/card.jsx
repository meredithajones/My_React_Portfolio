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
  
<a href="https://morning-reef-44056.herokuapp.com/?id=6022f139e7cfc80015cd1c9b">  <Card.Img variant="top" src={FitTrack} /> </a>  
    <Card.Body>
      <Card.Title>Fitness Tracker</Card.Title>
      <Card.Text>
       An application to track the number and length of workouts for a user.  </Card.Text>
      <Card.Link href="https://morning-reef-44056.herokuapp.com/?id=6022f139e7cfc80015cd1c9b"> Check out the live application here.</Card.Link>
    </Card.Body>
    <Card.Footer>
    <Card.Link class="muted" href="https://github.com/meredithajones/get_fit">Visit the Github repo</Card.Link>
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
