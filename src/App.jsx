import Login from "./pages/Login.jsx";
import Auth from "./pages/Auth.jsx";
import Play from "./pages/Play.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const isLoggedIn = () => {
    return window.localStorage.getItem("accessToken");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn() ? <Play /> : <Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
