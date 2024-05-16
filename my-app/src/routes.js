
import {MAIN_ROUTE,LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Main from "./pages/Main";
import Auth from "./pages/Auth";


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]
