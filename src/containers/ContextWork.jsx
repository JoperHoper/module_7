import { ContextStatus } from "../components/ContextStatus";
import { useUserContext } from "../context/UserContext"

export const ContextWork = () => {
    const { currentUser, handleUpdateUser, mode, toggleMode } = useUserContext();
    const handleNameChange = (e) => {
        handleUpdateUser({ name: e.target.value })
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
                    <input value={currentUser.name} onChange={handleNameChange} />
                    <button onClick={toggleMode}>{mode}mode</button>
                </div>
            </div>
        </div>
    )
}