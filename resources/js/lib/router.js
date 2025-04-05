import {createBrowserRouter} from "react-router";
import {Cars} from "../components/pages/Cars.jsx";
import {Dogs} from "../components/pages/Dogs.jsx";
import {Index} from "../components/pages/Index.jsx";
import {Layout} from "../components/Layout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [{
            index: true, Component: Index
        }, {
            path: "/cars",
            Component: Cars,
        }, {
            path: "/dogs",
            Component: Dogs,
        }]
    }
]);
