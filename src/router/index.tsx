import { RouteObject } from "react-router-dom";
import { Authlayout, Mainlayout } from "components"
import { PATH } from "constant";
import { Home, Login, Register } from "pages";

export const router: RouteObject[] = [
    {
        element: <Mainlayout />,
        path: "/",
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        element: <Authlayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />
            },
            {
                path: PATH.register,
                element: <Register />
            }
        ]
    }
]