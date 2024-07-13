import React, { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export const HobbyForm = () => {
    const [status, setStatus] = useState('');
    // similar state variables mapped to form inputs
    const [hobby, resetHobby] = useFormInput('');

    // similar handler functions
    const handleHobbyChange = (e) => hobby.onChange(e.target.value);

    function handleSubmit() {
        if (hobby.value === "" || hobby.value !== isNaN) {
            alert("Please Enter a Valid Hobby")
        }
        else {
            resetHobby('');
            setStatus(`Your hobby is ${hobby.value}`)
        }
    }
    return (
        <div className="SubscribeForm componentBox">
            <label>Hobby:
                <input style={{ margin: "2px" }} value={hobby.value} onChange={handleHobbyChange} placeholder="Enter Hobby" type="text" />
            </label><br />
            <button onClick={handleSubmit} style={{ padding: "5px 12px", margin: "5px", backgroundColor: "lightGrey", boxShadow: "1px 1px 3px" }}>Submit</button>
            <div>{status}</div>
        </div>
    );
}