import React from 'react';
import Qrcode from '../img/qr.png';

const About = () => (
    <div className="grand_wrapper about_wrapper">
        <h2>About Page</h2>
        <a href="https://github.com/knikuji/spa_test">Github of this portfolio</a>
        <h3>This site QRcode</h3>
        <img src={Qrcode} alt="" className="qr_image" />
    </div>
);

export default About;
