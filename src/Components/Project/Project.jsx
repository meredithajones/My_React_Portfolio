import React from "react";

const Card = (props) => {
  <div className="card" style={{width: 15}}>
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h3 className="card-title">{props.title}</h3>
    <p className="card-text">{props.client}<br></br></p>
    
  </div>
</div>

}
  export default Card;