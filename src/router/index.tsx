import { RouteObject } from "react-router-dom";
import { Authlayout, Mainlayout, TravelTemplate } from "components"
import { PATH } from "constant";
import { Account, Admin, Home, Location, Login, Register, Room } from "pages";

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
            {
                path: PATH.account,
                element: <Account />,
            },
            {
                path: PATH.admin,
                element: <Admin />
            },
            {
                path: PATH.travel,
                element: <TravelTemplate />
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