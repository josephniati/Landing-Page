import React from "react";


const Cards = (props) => {

    return (
        <div className ="card" style ={{width: "18rem"}}>
            <img src={require("../../Images/GreySquare.png")} className="card-img-top" alt="..."/>
            <div className ="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{props.cardText}</p>
                <button className="btn btn-primary">Go somwehere</button>
            </div>
        </div>
    )
}

export default Cards;