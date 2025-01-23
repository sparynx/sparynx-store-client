import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import SingleProductPage from "../pages/products/SingleProductPage"

import Signup from "../components/Signup"
import Login from "../components/Login"
import AllProducts from "../pages/home/AllProducts"
import CartPag from "../pages/products/CartPag"
import CheckoutPage from "../pages/products/CheckoutPage"
import About from "../pages/products/About"
import ContactUs from "../pages/products/ContactUs"
import ProtectedRoute from "./ProtectedRoute"
import OrderPage from "../pages/products/OrderPage"
import AdminLogin from "../components/AdminLogin"
import DashboardLayout from "../pages/dashboard/DashBoardLayout"
import Dashboard from "../pages/dashboard/Dashboard"
import AdminRoutes from "./AdminRoutes"
import AddNewProducts from "../pages/dashboard/addproducts/AddNewProducts"
import EditProducts from "../pages/dashboard/editproducts/EditProducts"
import ManageProducts from "../pages/dashboard/manageProducts/ManageProducts"
import NotFound from "../components/NotFound"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/products/:id",
                element: <SingleProductPage/>
            },
            {
                path: "/products",
                element: <AllProducts/>
            },
            {
                path: "/cart",
                element: <ProtectedRoute><CartPag/></ProtectedRoute>
            },
            {
                path: "/checkout",
                element: <ProtectedRoute><CheckoutPage/></ProtectedRoute>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/orders",
                element: <OrderPage/>
            },
            {
                path: "/product/:id",
                element: <SingleProductPage/>
            },
            {
                path: "/admin",
                element: <AdminLogin/>
            },

        ]
    },

    {
        path: "/dashboard",
        element: <AdminRoutes><DashboardLayout/></AdminRoutes>,
        children: [
            {
                path: "",
                element: <AdminRoutes><Dashboard/></AdminRoutes>
            },
            {
                path: "add-new-product",
                element: <AdminRoutes><AddNewProducts/></AdminRoutes>
            },
            {
                path: "edit-product/:id",
                element: <AdminRoutes><EditProducts/></AdminRoutes>
            },
            {
                path: "manage-product",
                element: <AdminRoutes><ManageProducts/></AdminRoutes>
            },

        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router