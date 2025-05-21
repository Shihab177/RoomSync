import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddToFindRoommate from "../Pages/AddToFindRoommate";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import ErrorPage from "../Component/ErrorPage";

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
                Component:AddToFindRoommate
            },
            {
                path:"/BrowseListing",
                Component:BrowseListing
            },
            {
                path:'/MyListings',
                Component:MyListings
            },
           
           
        ]
    }
])