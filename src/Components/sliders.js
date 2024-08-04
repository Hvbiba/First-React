import React from "react";

function Sliders(){
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i.pinimg.com/474x/28/83/b9/2883b9da32a93a087fd45058250014c7.jpg" className="d-block" alt="..."/>
                </div>
                <div className="carousel-item ">
                <img src="https://i.pinimg.com/564x/1d/93/5f/1d935f4c1f56ec5624f25b220725556d.jpg" className="d-block " alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://i.pinimg.com/564x/8c/78/f9/8c78f9bd34c6706881aa2d0963d37a94.jpg" className="d-block" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </>
    );
}

export default Sliders;