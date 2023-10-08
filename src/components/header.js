import React from "react";
import './header.css'


function Header(){
    return(
        <div className="header">
            <div className="name-bar">
                <i class="fa-regular fa-bars"></i>
                <h3>Golden Carrol - Addison</h3>
            </div>
            <div className="filter-bar">
                <i class="fa-solid fa-bars-filter"></i>
                <p>Filter</p>
                <i class="fa-regular fa-magnifying-glass"></i>
            </div>
        </div>
    )
}


export default Header