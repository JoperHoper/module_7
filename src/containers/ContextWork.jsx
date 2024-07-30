import { useState } from "react";
import { ContextStatus } from "../components/ContextStatus";
import { useUserContext } from "../context/UserContext"

export const ContextWork = () => {
    const { currentUser, handleUpdateUser, mode, toggleMode } = useUserContext();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = () => {
        handleUpdateUser({ name: name, email: email })
    }

    return (
        <div>
            <ContextStatus />
            <div
                style={{
                    border: "solid blue 1px",
                    padding: "10px",
                    margin: "10px",
                    flexDirection: "column",
                    backgroundColor: mode === "dark" ? "black" : "lightgrey",
                    color: mode === "dark" ? "white" : "black"
                }}
            >

                <p>SLIDE NAME</p>
                <div>
                    Name: <input value={name} onChange={handleNameChange} />
                    Email: <input type="email" value={email} onChange={handleEmailChange} />
                    <button onClick={toggleMode}>{mode}mode</button>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}