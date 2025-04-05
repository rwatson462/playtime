import {Layout} from "./components/Layout.jsx";
import {Outlet, RouterProvider} from "react-router";
import {router} from './lib/router'

// React app starts here

export function App() {
    return (
        <RouterProvider router={router}/>
    )
}
