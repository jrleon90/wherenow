import React from 'react';
import Mountain from '../assets/img/mountains-hero.png';
import Mountain_2 from '../assets/img/mountain_2.png';

const Banner = () => {

    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item active">
                    <img src={Mountain} alt="..." className="banner-image"/>
                </div>

                <div className="item">
                    <img src={Mountain_2} alt="..." className="banner-image"/>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Banner;