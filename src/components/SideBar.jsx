import React from 'react';
import "./Sidebar.css"

const SideBar = () => {
  const date = new Date().toISOString().substring(0, 10);
  return (
    <div className='sidebar'>
      <p>Select Date</p>
      <input type="date" value={date} />
      <p>High Temperature</p>
      <p>Low Temperature</p>
      <p>Humidity</p>
      <p>Sunrise Time</p>
      <p>Sunset Time</p>
    </div>
  )
}

export default SideBar