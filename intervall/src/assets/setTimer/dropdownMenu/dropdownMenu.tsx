import menuIcon from "./../../images/navicon.svg";
import { useState } from "react";
import "./dropdownMenu.scss";
import React from "react";



function DropdownMenu() {
    const [isActive, setIsActive] = useState(false);



    return (
        <div className="dropdown">
            <button className="dropbtn"><img src={menuIcon} alt="menu" onClick={(e) => setIsActive(!isActive)} /></button>
            <div className="dropdown-content">
                {isActive && (
                    <div className="dropdown-menu">
                        <h2>Digital Timer</h2>
                        <h2>Analog Timer</h2>
                        <h2>Visual Timer</h2>
                        <h2>Text Timer</h2>
                        <h2>Circles Timer</h2>
                    </div>
                )}

            </div>
        </div>
    )
}

export default DropdownMenu;