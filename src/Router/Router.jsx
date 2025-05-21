import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddToFindRoommate from "../Pages/AddToFindRoommate";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import ErrorPage from "../Component/ErrorPage";
import AuthLayout from "../AuthLayout/AuthLayout";
import Registar from "../Pages/Registar";
import Login from "../Pages/Login";
import PrivateRouth from "../Provider/PrivateRouth";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement: <ErrorPage />,
        children:[
            {
                index:true,
                Component: Home 
            },
            {
                path:"/AddToFindRoommate",
                element:<PrivateRouth><AddToFindRoommate></AddToFindRoommate></PrivateRouth>
            },
            {
                path:"/BrowseListing",
                Component:BrowseListing
            },
            {
                path:'/MyListings',
                element:<PrivateRouth><MyListings></MyListings></PrivateRouth>
            },
        ]
        
    },
    {
                path:'/auth',
                Component:AuthLayout,
                children:[
                    {
                        path:'/auth/register',
                       Component:Registar

                    },
                    {
                        path:'/auth/login',
                        Component:Login
                    }
                ]

            }
])