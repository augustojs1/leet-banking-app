import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginScreen } from "./components/LoginScreen";
import { AuthProvider } from "./context/AuthContext";
import { TransactionProvider } from "./context/TransactionContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <AuthProvider>
        <TransactionProvider>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>

          <GlobalStyle />
        </TransactionProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
      />
    </>
  );
}

export default App;
