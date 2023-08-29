import React from 'react';
import img1_off from 'img/dimension1_off.png'
import img1_on from 'img/dimension1_on.png'
import img2_off from 'img/dimension2_off.png'
import img2_on from 'img/dimension2_on.png'
import img3_off from 'img/dimension3_off.png'
import img3_on from 'img/dimension3_on.png'

function Dimension() {
    return (
        <div className="dimension">
            <div className="box">
                <div className="num">01</div>
                <div className="img">
                    <img src={img1_off} alt="img" />
                    <img src={img1_on} alt="img" />
                </div>
            </div>
            <div className="box">
                <div className="num">02</div>
                <div className="img">
                    <img src={img2_off} alt="img" />
                    <img src={img2_on} alt="img" />
                </div>
            </div>
            <div className="box">
                <div className="num">03</div>
                <div className="img">
                    <img src={img3_off} alt="img" />
                    <img src={img3_on} alt="img" />
                </div>
            </div>
        </div>
    );
}

export default Dimension;
