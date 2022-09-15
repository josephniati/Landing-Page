
import Cards from "./Components/Cards/Cards";
import React from "react";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

 function App() {
 return (
  <div>
<NavBar />
<Jumbotron />
    <div className="d-flex"><Cards cardText={'Hello my name is Joe.'} />
    <Cards cardText={"I like Kung fu."} />
    <Cards cardText={"Want to go swimming."} />
    <Cards cardText={"It is night time."} />
    </div>
    <Footer />
    



  </div>
 );
 

}

export default App;
