import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Root";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default Router;
