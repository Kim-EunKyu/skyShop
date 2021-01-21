import { Route } from "react-router-dom";
import "./App.css";
import ProductDetailContainer from "./container/product/ProductDetailContainer";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ProductDetailContainer} path="/product" />
    </>
  );
}

export default App;
