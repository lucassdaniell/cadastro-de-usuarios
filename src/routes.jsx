import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },
    {
        path: '/listagem-de-usuariario',
        element: < ListUsers />
    }
])


export default router
