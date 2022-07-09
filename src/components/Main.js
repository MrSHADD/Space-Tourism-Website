import React from "react";
import Destination from "../Destination";

export default function Main(){
    return(
        <main className="main">
            <div className="div-space">
                <h5 >SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                
                <a
    style={{ cursor:"pointer" }}
    href="#"
    onClick={() =>
                  this.toggleModal("Rental Objects With Current Rent")
                }
 >
Click Me
</a>
                <p> 
                    Let’s face it; if you want to go to space, you might
                    as well genuinely go to outer space and not hover kind 
                    of on the edge of it. Well sit back, and relax because 
                    we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div>
            <div className="explore-circle">
                <h4>EXPLORE</h4>
            </div>
            </div>
        </main>
    )
}
