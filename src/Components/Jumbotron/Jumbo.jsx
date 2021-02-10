import React from "react";
import "./Jumbotron.css"

const Jumbo = (props) => {
  return (
    <div className="jumbotron">
      <h1 className={props.titleName}>{props.name}</h1>
      <p className={props.messagecss}>{props.message}</p>
      <hr className="my-4" />
      <p>{props.text}</p>
    </div>
  )
}
export default Jumbo;