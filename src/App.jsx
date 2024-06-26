import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.scss"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// lesson learned, react needs capitalize first letter on jsx components
function App() {
  const {currUser} = useContext(AuthContext);
  //console.log(currUser);

  const ProtectedRoute = ({children}) => {
    if (!currUser) 
    {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
