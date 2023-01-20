import React from 'react';
import "./TitleBar.css";
import location from "../images/location.svg";
import search from "../images/search.svg";

const TitleBar = () => {
  return (
    <div className='titlebar'>
        <div>
            <div>
                <img src={location} alt="" width={20} />
                <p>Agra, Uttar Pradesh</p>
            </div>
            <h6>27°10'36'' N & 78°0'29'' E</h6>
        </div>
        <div>
            <input type="text" placeholder='Search your city here...' />
            <img src={search} alt="" />
        </div>
    </div>
  )
}

export default TitleBar