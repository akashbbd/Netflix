import React from 'react'
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
function Lelo() {
    return (
        <div>

           <h1>Current Date is = {currentDate}</h1>
           <h1>Current Time is = {currentTime}</h1>
           
        </div>
    )
}

export default Lelo;
