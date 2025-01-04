import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Details from "../Pages/Details";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/details/:id',
                loader:()=> fetch('/Projects.json'),
                element:<Details></Details>
            }
        ]
    }
])

export default Router;