import { Outlet } from "react-router-dom";
import Home from "../routes/home/home";
import Register from "../routes/register/register";

import "./App.css";

const App = () => {
  return (
    <div>
      <Home />
      {/* <Outlet /> */}
    </div>
  );
};

export default App;
