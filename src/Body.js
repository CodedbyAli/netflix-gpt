import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./components/Login"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/home',
            element: <Browse />
        }
    ])

  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

export default Body