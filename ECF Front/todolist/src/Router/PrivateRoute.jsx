import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

    //isLogin permet de donner accés a la page todoList si celle-ci est sur true, si elle est false, redirection sur la page Login
    const isLogin = true;
       

    return(
        isLogin ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute;