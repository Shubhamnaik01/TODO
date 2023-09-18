import React from "react";
import "./CSS/nav.css"

const Nav = () =>{
    return (
        <div>
            <nav class="top_nav">
                <h1 class="nav_h1">TODO</h1>
                <ul class="nav_litems">
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Features</li>
                </ul>
            </nav>
        </div>
    )
} 

export default Nav;