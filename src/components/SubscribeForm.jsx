import React, { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export const SubscribeForm = () => {
    const [status, setStatus] = useState('');
    // similar state variables mapped to form inputs
    const [firstName, resetFirstName] = useFormInput('Mary');
    const [email, resetEmail] = useFormInput('mary@poppins.com');
    const [surname, resetSurname] = useFormInput('HadALittleLamb');

    // similar handler functions
    const handleNameChange = (e) => firstName.onChange(e.target.value);
    const handleEmailChange = (e) => email.onChange(e.target.value);
    const handleSurnameChange = (e) => surname.onChange(e.target.value);

    function handleSubscribe() {
        resetFirstName('');
        resetEmail('');
        resetSurname('')
        setStatus(`Thanks for subscribing!, ${firstName.value}`)
    }
    return (
        <div className="SubscribeForm componentBox">
            <label>First name: {/* form inputs with similar props */}
                <input value={firstName.value} onChange={handleNameChange} />
            </label>
            <label>Surname: {/* form inputs with similar props */}
                <input value={surname.value} onChange={handleSurnameChange} />
            </label>
            <label>Email: {/* form inputs with similar props */}
                <input value={email.value} onChange={handleEmailChange} />
            </label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}