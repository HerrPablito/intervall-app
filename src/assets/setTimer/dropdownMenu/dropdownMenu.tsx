import menuIcon from "./../../images/navicon.svg";
import { useState } from "react";
import "./dropdownMenu.scss";




function DropdownMenu() {
    const [isActive, setIsActive] = useState(false);



    return (
        <div className="dropdown">
            <button className="dropBtn"><img src={menuIcon} alt="menu" onClick={() => setIsActive(!isActive)} /></button>
            <div className="dropdownContent">
                {isActive && (
                    <div className="dropdownContent__dropdownMenu">
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