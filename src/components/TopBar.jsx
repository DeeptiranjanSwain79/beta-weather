import React from 'react';
import "./TopBar.css";
import logo from "../images/logo.svg";
import refresh from "../images/refresh.svg"

const TopBar = () => {
    const reload = () => {window.location.reload()}
    return (
        <div className='topbar'>
            <div>
                <img src={logo} alt="" width={20} />
                <h1>Weather 99</h1>
            </div>

            <div onClick={reload} className='cPointer'>
                <img src={refresh} alt="" width={20} />
                <h1>Refresh</h1>
            </div>
        </div>
    )
}

export default TopBar