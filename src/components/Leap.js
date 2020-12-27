import React, { useState } from 'react';

export default function Leap(){
    const [year, setYear] = useState(0);
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
            // console.log(event.target.value.split("-")[0]);
            setYear(event.target.value.split("-")[0]);
            setMessage("");
    };

    const handleSubmit = () => {
            if(year % 400 === 0){
                setMessage(`${year} is leap year.`);
            }else if(year % 100 === 0){
                setMessage(`${year} isn't leap year.`);
            }else if(year % 4 === 0){
                setMessage(`${year} is leap year.`);
            }else{
                setMessage(`${year} isn't leap year.`);
            }
    };

    return(
        <div className="container card flex">
            <input type="date" onChange={handleChange} placeholder="Check Leap Year"/>
            <button onClick={handleSubmit}>Check Year</button> 
            <section className="message output">
               {message}
            </section>
        </div>
    );
}