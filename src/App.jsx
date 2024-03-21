import Register from "./pages/register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// lesson learned, react needs capitalize first letter on jsx components
function App() {
  const {currUser} = useContext(AuthContext);

  console.log(currUser)

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
