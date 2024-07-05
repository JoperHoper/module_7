import { Clock } from "./Clock";
import { useState } from "react";

export function ClockDisplay() {

    const [showClock, setShowClock] = useState(false);
    
    const toggleClock = () => {
    setShowClock(!showClock);
    }
    
    return (
    <div className="ClockDisplay componentBox">
    {showClock && <Clock />}
    <button onClick={toggleClock}>Toggle Clock</button>
    </div>
    )
    }
    
    export default ClockDisplay;
    // ++ Add both components into Clock.jsx and render
    // <ClockDisplay /> from App.jsx
    
    // ++ Watch the console when the Clock is removed -
    // does the ticking still continue?