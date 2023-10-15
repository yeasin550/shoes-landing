import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Contact from './../Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
        children: [
        {
                path: "/",
            element: <Home/>
        },
        {
                path: "/about",
            element: <About/>
        },
        {
                path: "/services",
            element: <Services/>
        },
        {
                path: "/contact",
            element: <Contact/>
        }
        ],
  },
]);
export default router;
