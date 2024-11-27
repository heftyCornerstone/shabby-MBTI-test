import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import TestPage from "../pages/TestPage";
import Profile from "../pages/Profile";
import Results from "../pages/Results";
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/SigninPage";
import Layout from "../components/layouts/Layout";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignupPage />
            },
            {
                path: '/signin',
                element: <SigninPage />
            },
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: '/test',
                        element: <TestPage />
                    },
                    {
                        path: '/results',
                        element: <Results />
                    },
                    {
                        path: '/profile',
                        element: <Profile />
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes;