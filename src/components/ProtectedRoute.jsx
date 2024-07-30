import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// wrap around logged-in user only routes to protect them
function ProtectedRoute({ children }) {
    const { currentUser } = useUserContext();

    if (!currentUser.email) {
        return <Navigate to={"/contect work"} replace />;
    }
    // works for both nested and standalone routes
    return children ? children : <div>Not Found</div>;
}
export default ProtectedRoute