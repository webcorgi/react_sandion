import React, { useRef } from 'react';
import img1_off from 'img/dimension1_off.png'
import img1_on from 'img/dimension1_on.png'
import img2_off from 'img/dimension2_off.png'
import img2_on from 'img/dimension2_on.png'
import img3_off from 'img/dimension3_off.png'
import img3_on from 'img/dimension3_on.png'
function Dimension() {

    const linkRefs = useRef([]);
    linkRefs.current = [React.createRef(), React.createRef(), React.createRef()];

    const handleMouseEnter = (index) => {
        linkRefs.current[index].current.classList.add('active');
    }

    const handleMouseLeave = (index) => {
        linkRefs.current[index].current.classList.remove('active');
    }

    return (
        <div className="dimension">
            <div className="dimension__inner">
                <a ref={linkRefs.current[0]} className="box" href="https://www.sandbox.game/en/experiences/AfterOcean%20:%20Color%20Blast/a4fc68ad-2d3f-4e77-b82b-7bfab901a743/page/" target="_blank">
                    <div className="num">
                        <span onMouseOver={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>01</span>
                    </div>
                    <div className="img" onMouseOver={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                        <img src={img1_off} alt="img" />
                        <img src={img1_on} alt="img" />
                    </div>
                </a>
                <a ref={linkRefs.current[1]} className="box" href="https://www.sandbox.game/en/experiences/AfterOcean%20:%20Adventure%20GREEN/c85994b7-1103-44f6-ab9e-ff1be9273ddf/page/" target="_blank">
                    <div className="num">
                        <span onMouseOver={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>02</span>
                    </div>
                    <div className="img" onMouseOver={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                        <img src={img2_off} alt="img" />
                        <img src={img2_on} alt="img" />
                    </div>
                </a>
                <a ref={linkRefs.current[2]} className="box" href="https://www.sandbox.game/en/experiences/AfterOcean%20:%20Canisty%20Run!/dd4599ad-88f8-4192-84eb-7b5d9d8c38a7/page/" target="_blank">
                    <div className="num">
                        <span onMouseOver={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>03</span>
                    </div>
                    <div className="img" onMouseOver={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                        <img src={img3_off} alt="img" />
                        <img src={img3_on} alt="img" />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Dimension;