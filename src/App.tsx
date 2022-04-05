import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginScreen } from "./components/LoginScreen";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
