import React from 'react';
import "./WeatherCard.css";
import cloud from "../images/cloud.svg"

const WeatherCard = ({ w }) => {
    return (
        <div key={w.dt} className='weatherCard'>
            <p className='date'>{w.dt_txt.replace(" 12:00:00", "")}</p>
            <div>
                <div className="top">
                    <img src={cloud} alt="" />
                    <h1>{w.weather[0].main || "Sunny"}</h1>
                </div>
                <p>{w.main.temp_max}&deg;F/{w.main.temp_min}&deg;F</p>
                <p>{w.main.feels_like}&deg;F/{w.main.humidity}&deg;F</p>
                <span>{w.main.humidity}</span>
                <p>06:21 PM</p>
                <p>05:39 PM</p>
            </div>
            {console.log(w)}
        </div>
    )
}

export default WeatherCard