import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import FitTrack  from "./Images/fitness_tracker.gif";
import HappyTImg from "./Images/happyTrails.gif";
import NoteTake from "./Images/note_taker.gif";
import SnC from "./Images/s_c_1.gif";
import StaffDir from "./Images/staff_directory.gif";
import PassGen from "./Images/password_generator.gif";

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
        My first group project. This application allows users to look up nearby hiking trails filtered by hike length and distance from them.</Card.Text>
        <Card.Link href="https://wyliedavid1984.github.io/HappyTrails/"> Check out the live application here.</Card.Link>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="https://github.com/meredithajones/HappyTrails.git"> Visit the project Github repo.</Card.Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={NoteTake} />
    <Card.Body>
      <Card.Title>Note Taker</Card.Title>
      <Card.Text>
      This application allows users to create, store and delete</Card.Text>
      <Card.Link href="https://boiling-citadel-67370.herokuapp.com/"> Check out the live application here.</Card.Link>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="https://github.com/meredithajones/note_taking_app"> Visit the project Github repo.</Card.Link>
    </Card.Footer>
  </Card>

  
<Card>
    <Card.Img variant="top" src={SnC} />
    <Card.Body>
      <Card.Title>Shop and Chef</Card.Title>
      <Card.Text>
      My second group project. This app allows users to create shopping lists with items that they add, or import from recipes found through the app.</Card.Text>
      <Card.Link href="https://shop-n-chef.herokuapp.com/"> Check out the live application here.</Card.Link>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="https://github.com/meredithajones/shop_n_chef#links"> Visit the project Github repo.</Card.Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={StaffDir} />
    <Card.Body>
      <Card.Title>Staff Directory</Card.Title>
      <Card.Text>
      A program to let managers and staff easily reference a list of the current employees in an organization. Staff in the database can be searched by tying in a name, and can be sorted by name or city where they live.</Card.Text>
      <Card.Link href="https://shop-n-chef.herokuapp.com/"> Check out the live application here.</Card.Link>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="https://cloud.mongodb.com/v2/601864fc46ca5b4c992e2b7e#clusters"> Visit the project Github repo.</Card.Link>
    </Card.Footer>
  </Card>
  

<Card>
<Card.Img variant="top" src={PassGen} />
<Card.Body>
  <Card.Title>Password Generator</Card.Title>
  <Card.Text>
An application to quickly generate long, complex passwords for a user.</Card.Text>   
<Card.Link href="https://shop-n-chef.herokuapp.com/"> Check out the live application here.</Card.Link>
</Card.Body>
<Card.Footer>
<Card.Link href="https://meredithajones.github.io/password_generator_js/"> Visit the project Github repo.</Card.Link>
</Card.Footer>
</Card>
</CardGroup>
)
};

export default Cards;
