import React, { useState } from 'react';
import logo from 'img/logo.png'
import { Link } from 'react-router-dom';
import ConnectPopup from './ConnectPopup';

function Header({isPageDemension, setIsPageDemension}) {
    const [isShowPopup, setisShowPopup] = useState(false);

    return (
        <>
            <header>
                <Link to="/" className='logo' onClick={() => setIsPageDemension(false)}>
                    <img src={logo} alt="sandion" />
                </Link>
                <nav>
                    <Link to="/dimension" className={isPageDemension==true ? 'active' : ''} onClick={() => setIsPageDemension(true)}>
                        DIMENSION
                    </Link>
                    <a href='javascript:;' className={isShowPopup==true ? 'btn__connect active' : 'btn__connect'} onClick={() => setisShowPopup(true)} >
                        CONNECT
                    </a>
                </nav>
            </header>
            {isShowPopup && <ConnectPopup setisShowPopup={setisShowPopup} />}
        </>
    );
}

export default Header;
