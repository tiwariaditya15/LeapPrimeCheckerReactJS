import React, { useState } from 'react';

export default function Prime(){
    const [number, setNumber] = useState(-1);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("")

    const handleChange = (event) =>{
        // console.log(event.target.value);
        if(event.target.value > 1 || event.target.value === ""){
            setNumber(event.target.value);
            setError("");
            setMessage("");
        }else{
            setError("Enter valid number or numbers above 1!");
        }
    };

    const handlSubmit = () => {
            if(number <= 1){
                return;
            }
            let primeFlag = true;
            for(let i = 2;i <= number/2; i++){
                if(number % i === 0){
                    primeFlag = false
                }
            }
            if(primeFlag){
                setMessage(`${number} is a prime number.`);
            }else{
                setMessage(`${number} isn't a prime number.`);
            }
    };

    return(
        <div className="container card flex">
            <input type="number" onChange={handleChange} placeholder="Enter number"/>
            <button onClick={handlSubmit}>Check Number</button> 
            <section className="message output">
                {message}
            </section>
            <section className="message error">
                {error}
            </section>
        </div>
    );
}