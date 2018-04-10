import React from 'react';



const ClickyGame = props => 


	 {

		<div className="card">
  <img className="card-img-top" src={props.image} alt="altt" onClick={this.handleIncrement} />
  {" "}
  <div className="card-body">
    <h5 className="card-title"> {props.id} </h5>
    <p className="card-text">{props.occupation}</p>
    
  </div>
  
</div>


		};


export default ClickyGame;