import React from "react";



function NavBar() {

    return (
        <div className ="NavBar" style ={{width: "18rem"}}>
            <img src={require("../../Images/GreySquare.png")} className="navBar-img-top" alt="..."/>
            <div className ="navBar-body">
                <h5 className="navBar-title">Card title</h5>
                <p className="navBar-text">Yes my name is</p>
                <button className="btn btn-primary">Go somwehere</button>
            </div>
        </div>
    )
}

export default NavBar;