import React from "react";
import "./Homepage.scss";
import banner from "../../assets/banner.png";


function Homepage() {

    return (
        <>
            <div className="top-banner">
                <div className="banner">
                    <div className="bannertext">
                        <h2> “Find your forever friend”</h2>
                        <p>"Browse hundreds of lovable pets waiting for their forever homes." "Browse hundreds of lovable pets waiting for their forever homes.""Browse hundreds of lovable pets waiting for their forever homes."</p>
                        <a href="browsepets" className="browsebtn"> Browse Pets</a>
                        <a href="#" className="listbtn"> List Your Pet </a>
                    </div>
                    <div>
                        <img src={banner} />
                    </div>

                </div>
            </div>

        </>
    );
}
export default Homepage;