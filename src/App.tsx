import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginScreen } from "./components/LoginScreen";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
