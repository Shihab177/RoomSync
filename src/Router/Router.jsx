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
import UpdatePage from "../Pages/UpdatePage";
import Loading from "../Component/Loading";
import DetailsPage from "../Pages/DetailsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement: <ErrorPage />,
        children:[
            {
                index:true,
                 loader:()=>fetch('https://roommate-finder-web-server.vercel.app/featured-roommates'),
                 HydrateFallback:Loading,
                Component: Home 
            },
            {
                path:"/AddToFindRoommate",
                element:<PrivateRouth><AddToFindRoommate></AddToFindRoommate></PrivateRouth>
            },
            {
                path:"/BrowseListing",
                loader:()=>fetch('https://roommate-finder-web-server.vercel.app/roommates'),
                HydrateFallback:Loading,
                Component:BrowseListing
            },
            {
                path:'/MyListings',
            
                element:<PrivateRouth><MyListings></MyListings></PrivateRouth>
            },
            {
                path:'/update/:id',
                loader:({params})=> fetch(`https://roommate-finder-web-server.vercel.app/roommates/${params.id}`),
                HydrateFallback:Loading,
                Component:UpdatePage
            },
            {
                path:'/details/:id',
                loader:({params})=> fetch(`https://roommate-finder-web-server.vercel.app/roommates/${params.id}`),
                 HydrateFallback:Loading,
                element:<PrivateRouth><DetailsPage></DetailsPage></PrivateRouth>

            }
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