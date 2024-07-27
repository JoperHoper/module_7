import { useUserContext } from "../context/UserContext"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    const linkListDisplayHandler = () => {
        return linkList.map((linkObject) => {
            return (
                <li key={linkObject.to}>
                    <NavLink to={linkObject.to}>{linkObject.label}</NavLink>
                </li>
            )
        })
    }

    const linkList = [
        { to: "/lab-one", label: "Lab One" },
        { to: "/lab-two", label: "Lab Two" },
        { to: "/slidework", label: "Slidework" },
        { to: "/name-ref", label: "Name Ref" },
        { to: "/reducer-example", label: "Reducer" },
        { to: "/post-list", label: "Post List" },
        { to: "/custom-hook-examples", label: "Custom Hook" },
        { to: "/context-work", label: "Context" },
    ]

    const { mode } = useUserContext();

    return (
        <nav className="NavBar"
            style={{ backgroundColor: mode === "light" ? "white" : "black", color: mode === "light" ? "black" : "white" }}>
            <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {linkListDisplayHandler()}
            </ul>
        </nav>
    )
}