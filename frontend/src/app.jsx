import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Products from './pages/products'
import ProductDetails from './pages/product-detail'
import { DataProvider } from "./data"

const router = createBrowserRouter([
    {
      path: "*",
      element: <Navigate to="products" replace/>,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/product/:productId",
      element: <ProductDetails />,
    },
]);


export default () => (
    <DataProvider>
        <RouterProvider router={router} />
    </DataProvider>
)