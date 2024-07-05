import { useState, useEffect } from "react";
// Renders a digital time that updates every second
export function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => { // first arg is usually an arrow function
        setInterval(() => tick(), 1000);
        console.log('Clock component mounted');

        // function returned from useEffect is run on unmount
        // and used to cleanup any side effects
        return () => {
            console.log('Clock component unmounted');
            clearInterval(clockInterval);
        }
    }, []);

    // second arg is an array of dependencies
    // IF NO [] DEPENDENCY, USEFFECT WILL FIRE EVERY RENDER
    // IF [] EMPTY DEPENDENCY, USEFFECT WILL FIRE ONLY ONCE
    // IF [variable name] HAS SOMETHING INSIDE, USEFFECT WILL FIRE WHEN VARIABLE IS CALLED

    const tick = () => {
        setDate(new Date());
        console.log('tick'); // track the effect frequency
    };
    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?