import React from "react";
import award from "./images.png"
import image from "./tof.jpeg"

const djam = () => {

    return (
        <div className="App-body">
            <nav className="navbar bg-light">
                <div className="container">
                    <img src={award} alt="" className="a-award-img" />
                    <p className="App-link">FEDERATION TOGOLAISE DE FOOTBALL</p>
                </div>
            </nav>
            <div className="container">
                    <img src={image} alt="" className="a-image-img" />
            </div>

        </div>
    );
}

export default djam;