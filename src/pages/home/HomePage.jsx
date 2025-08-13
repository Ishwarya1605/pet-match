import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import banner from "../../assets/banner.png";
function Homepage() {
    const [index, setIndex] = useState(0);
    const prevSlide = () => {
        if (index > 0) setIndex(index - 1);
    };
    const nextSlide = () => {
        if (index < pets.length - 3) setIndex(index + 1);
    };
    const [pets, setPets] = useState([]);
    console.log(pets, "dasdasdsa")
    useEffect(() => {
        fetch("http://localhost:3000/data/petlist.json")
            .then((res) => res.json())
            .then((data) => setPets(data));
    }, []);

    return (
        <>
            <div>
                <div className="top-banner">
                    <div className="banner">
                        <div className="bannertext">
                            <h2> “Find your forever friend”</h2>
                            <p>"Browse hundreds of lovable pets waiting for their forever homes." "Browse hundreds of lovable pets waiting for their forever homes.""Browse hundreds of lovable pets waiting for their forever homes."</p>
                            <a href="browsepets" className="browsebtn"> Browse Pets</a>
                            <a href="#view-pet" className="listbtn"> List Your Pet </a>
                        </div>
                        <div>
                            <img src={banner} />
                        </div>
                    </div>
                </div>
                <section>
                    <div className="pet-carousel">
                        <h2 className="title" id="view-pet">List Your Pet</h2>

                        <div className="carousel-wrapper">
                            <button className="nav-btn left" onClick={prevSlide}>
                                &#8592;
                            </button>

                            <div className="cards-container">
                                {pets.slice(index, index + 3).map((pet) => (
                                    console.log(pet, "petdata"),
                                    <div className="pet-card" key={pet.id}>
                                        <img src={pet.image} alt={pet.name} className="pet-image" />
                                        <div className="card-body">
                                            <h3 className="pet-name">{pet.name}</h3>
                                            <p className="pet-info">{pet.age}</p>
                                            <p className="pet-location">{pet.location}</p>
                                            <button className="view-btn">View Profile</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="nav-btn right" onClick={nextSlide}>
                                &#8594;
                            </button>
                        </div>
                    </div>
                </section>

            </div>


        </>
    );
}
export default Homepage;