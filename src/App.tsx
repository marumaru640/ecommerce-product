import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/login/LoginComponent";
import ErrorComponent from "./components/error/ErrorComponent";

import MainLayout from "./components/layout/MainLayout";
import ProductPage from "./components/product/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/item" element={<ProductPage />} />

        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
