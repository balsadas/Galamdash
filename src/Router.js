import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loading from "./Loading";
import Error404 from "./Page/Error404";



const Home = lazy(() => import('./Page/Home'))
const IntoPaper = lazy(() => import('./Page/IntoPaper'))
const Profile = lazy(() => import('./Page/Profile/Profile'))
const Register = lazy(() => import('./components/Register'))
const CreatePost = lazy(() => import('./Page/CreatePost'))


function Router() {
    const router = useRoutes([
        {
            element: <Suspense fallback={<Loading />}><Home /></Suspense>,
            path: '/'
        },
        {
            element: <Suspense fallback={<Loading />}><IntoPaper /></Suspense>,
            path: '/IntoPaper/:postID'
        },
        {
            element: <Suspense fallback={<Loading />}><Profile /></Suspense>,
            path: '/Profile'
        },
        {
            element: <Suspense fallback={<Loading />}><Register /></Suspense>,
            path: '/Register'
        },

        {
            element: <Suspense fallback={<Loading />}><CreatePost /></Suspense>,
            path: '/CreatePost'
        },
        {
            element: <Suspense><Error404 /></Suspense>,
            path: '/error404'
        },
        {
            element: <Navigate to='/error404' />,
            path: '*'
        }
    ])
    return router
}


export default Router;