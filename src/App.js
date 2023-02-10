import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
