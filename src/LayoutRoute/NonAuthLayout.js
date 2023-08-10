import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const NonAuthLayout = () => {

    const authLogin = localStorage.getItem("authenticated")
    const navigate = useNavigate();

    useEffect(() => {
        if (authLogin) {
            navigate('/dashboard')
        }
    },[authLogin,navigate])
    return (
        < Outlet />
    )
}
