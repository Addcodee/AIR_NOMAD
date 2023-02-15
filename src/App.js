import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useAuth } from "./contexts/AuthContextProvider";
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  const { checkAuth } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
