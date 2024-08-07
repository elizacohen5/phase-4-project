import App from "./components/App"
import Home from "./components/Home"
import Form from "./components/Form"
import SellerDetails from "./components/SellerDetails"
import FilterComponent from "./components/FIlterComponent"

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <FilterComponent />
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/sellers",
          element: <SellerDetails />,
        },
      ],
    },
  ];
  
  export default routes;