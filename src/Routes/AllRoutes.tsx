import {createBrowserRouter} from "react-router-dom"
import WebLayout from "../Components/Layouts/WebLayout"
import HomePage from "../Components/Pages/HomePage"
import DetailedPage from "../Components/Pages/DetailedPage"
import ErrorBoundary from "../Utils/ErrorBoundary"
import Onboarding from "../Components/Pages/Onboarding"




const Index = createBrowserRouter([
    {
        path:"/",
        element:<WebLayout/>,
        errorElement:<ErrorBoundary/>,
        hasErrorBoundary:true,
        children: [
            {
                index:true,
                element:<Onboarding/>
            },

        ],
        
    },

    {
        path:"/homepage/",
        element:<HomePage/>
     },

     {
         path:"/detailed/:title/:id",
         element: <DetailedPage/>,
     }
]);

export default Index