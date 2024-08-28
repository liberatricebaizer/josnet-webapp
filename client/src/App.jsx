import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

import Favorite from "./screens/Favorite";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<Login />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/SignIn" element={<Login />} />
        <Route path="/SignIn" element={<Login />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
