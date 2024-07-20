import { useContext } from "react"
import { useUserContext } from "../context/UserContext"
import { LoginForm } from "../components/formExample";

export const ContextWork = () => {
    const { currentUser, handleUpdateUser, mode } = useUserContext();

    return (
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
            {currentUser.name}
            <button onClick={() => handleUpdateUser({ name: "Josephine" })}>Update User</button>
        </div>
    )
}