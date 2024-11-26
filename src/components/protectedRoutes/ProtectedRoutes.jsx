import { Navigate, Outlet } from "react-router-dom"
import useUserAuthStore from "../../zustand/userAuthStore"

const ProtectedRoutes = () => {
    const { isSignin } = useUserAuthStore();

    if (!isSignin) { return <Navigate to='/' replace /> }

    return <Outlet />
}

export default ProtectedRoutes