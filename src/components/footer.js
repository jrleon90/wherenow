import React from 'react';
import FBLogo from '../assets/img/fb_logo.png';
import YTLogo from '../assets/img/yt_logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="col-md-3">
                <h4>Contáctanos</h4>
                <p><a href="mailto:info@wherenow.pe">info@wherenow.pe</a></p>
                <a target="_blank" href="https://facebook.com"><img src={FBLogo} alt="Facebook Page" className="logos" /></a>
                <a target="_blank" href="https://youtube.com"><img src={YTLogo} alt="YouTube Page" className="logos" /></a>
            </div>
            <div className="col-md-3">
                <h4>Info</h4>
                <a>FAQ</a>
            </div>
        </footer>


    );
};

export default Footer;