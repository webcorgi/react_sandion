import React, { useState } from 'react';
import logo from 'img/logo.png'
import { Link } from 'react-router-dom';
import ConnectPopup from './ConnectPopup';

function Header() {
    const [isShow, setisShow] = useState(false);

    return (
        <>
            <header>
                <Link to="/" className='logo'>
                    <img src={logo} alt="sandion" />
                </Link>
                <nav>
                    <Link to="/dimension">
                        DIMENSION
                    </Link>
                    <a href='javascript:;' className='btn__connect' onClick={() => setisShow(true)}>
                        CONNECT
                    </a>
                </nav>
            </header>
            {isShow && <ConnectPopup setisShow={setisShow} />}
            
        </>
    );
}

export default Header;
