import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth"

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if (isloading) { return <></> }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/account",
                    state: { from: location }
                }}
            ></Redirect>
            }
        ></Route>
    )
}

export default PrivateRoute;