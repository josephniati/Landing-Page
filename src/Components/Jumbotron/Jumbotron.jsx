import React from "react";


function Jumbotron() {

    return (
        <div className ="jumbotron" style ={{width: "18rem"}}>
            <img src={require("../../Images/GreySquare.png")} className="jumbotron-img-top" alt="..."/>
            <div className ="jumbotron-body">
                <h5 className="jumbotron-title">Card title</h5>
                <p className="jumbotron-text">Yes my name is</p>
                <button className="btn btn-primary">Go somwehere</button>
            </div>
        </div>
    )
}

export default Jumbotron;










