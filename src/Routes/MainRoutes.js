import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import AddProduct from "../components/Products/AddProduct";
import ProductList from "../components/Products/ProductList";
import CreateHomePage from "../Pages/CreateHomePage/CreateHomePage";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ProductDetails from "../components/Products/ProductDetails";
import { useAuth } from "../contexts/AuthContextProvider";
import EditProduct from "../components/Products/EditProduct";

const MainRoutes = () => {
  const { checkAuth } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  const PUBLIC_ROUTES = [
    { path: "/", element: <HomePage />, id: 1 },
    { path: "/login", element: <LoginPage />, id: 2 },
    { path: "/homes", element: <CreateHomePage />, id: 3 },
    { path: "/add", element: <AddProduct />, id: 4 },
    { path: "/edit/:id", element: <EditProduct />, id: 5 },
    { path: "/details/:id", element: <ProductDetails />, id: 6 },
    { path: "/houses", element: <ProductPage />, id: 7 },
    { path: "*", element: <NotFoundPage />, id: 8 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((obj) => (
          <Route path={obj.path} element={obj.element} key={obj.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
