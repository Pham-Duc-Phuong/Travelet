import { RouteObject } from "react-router-dom";
import { Authlayout, Mainlayout } from "components"
import { PATH } from "constant";
import { Home, Location, Login, Register, Room } from "pages";

export const router: RouteObject[] = [
    {
        element: <Mainlayout />,
        path: "/",
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: PATH.location,
                element: <Location />
            },
            {
                path: PATH.room,
                element: <Room />
            },
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