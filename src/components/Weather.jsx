import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import SideBar from './SideBar';
import "./Weather.css"

const Weather = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=85c3f5cdd36b2acb798891311c9f7022")
            .then(response => {
                setWeather(response.data.list);
            })
    }, [])

    return (
        <div className='weather'>
            <SideBar />
            <div>
                {weather.map(w => (
                    w.dt_txt.includes("12:00:00") ?
                        (<WeatherCard w={w} />) : ""
                ))}
            </div>
        </div>
    )
}

export default Weather