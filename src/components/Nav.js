import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Nav(){
    return(
        <div className="container nav">
                <NavLink 
                    to="/Prime"
                    className="link"
                    activeClassName="selected"
                    activeStyle={{}}
                >Prime Number</NavLink>
                <NavLink 
                    to="/Leap"
                    className="link"
                    activeClassName="selected"
                    activeStyle={{}}
                >Leap Year</NavLink>
        </div>
    );
}