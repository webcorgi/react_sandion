import React from 'react';

function Wrapper({children}) {
    return (
        <div className="Wrapper pcWrap">
            {children}
        </div>
    );
}

export default Wrapper;
