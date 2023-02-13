import React from "react";
import { Route, Routes } from "react-router";
import ProductList from "../components/Products/ProductList";
import CreateHomePage from "../Pages/CreateHomePage/CreateHomePage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { path: "/", element: <HomePage />, id: 1 },
    { path: "/register", element: <RegisterPage />, id: 2 },
    { path: "/login", element: <LoginPage />, id: 3 },
    { path: "/homes", element: <CreateHomePage />, id: 4 },
    { path: "/products", element: <ProductList />, id: 5 },
    { path: "*", element: <NotFoundPage />, id: 6 },
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
