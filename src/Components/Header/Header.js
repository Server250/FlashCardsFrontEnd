import React from "react";

import './Header.css';

let Header = (props) => {


    return(
        <div className="header_container">
            <div className="header_logo-primary">
                <h1>Flash Cards</h1>
            </div>
            <div className="header_logo-secondary">
                <h2>Made for UoG, by UoMe</h2>
            </div>
        </div>
    )

}

export default Header;