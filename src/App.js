import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useAuth } from "./contexts/AuthContextProvider";
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
