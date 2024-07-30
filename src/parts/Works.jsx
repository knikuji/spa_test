import React from 'react';
import Image from '../img/image.png';

const Works = () => (
    <div className="grand_wrapper home_wrapper">
        <h2>MyWork</h2>
        <p>This is my work of web creation!</p>
        <div className="works_container">
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
            <div className="work_grid">
                <a href="#"><img src={Image} alt="" /></a>
            </div>
        </div>
    </div>
);

export default Works;