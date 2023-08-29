import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import { Link, useNavigate } from 'react-router-dom';

function SubHeader({title}) {
    const navigate = useNavigate();
    return (
        {/* <header className='subHeader'>
            <div className="wrapper">
                <Link onClick={() => navigate(-1)} className='btn-back'>
                    <img src={btnBack} alt="back" />
                </Link>
                <div className='text'>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="ani-circles2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header> */}
    );
}

export default SubHeader;
